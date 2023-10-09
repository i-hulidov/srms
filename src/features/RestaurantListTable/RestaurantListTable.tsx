import { FC, MouseEvent } from 'react'
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  Spinner,
  Button,
  TableColumnId,
  useTableFeatures,
  useTableSort,
  TableColumnDefinition,
  createTableColumn
} from '@fluentui/react-components'
import {
  Eye24Filled,
  Edit24Filled,
  Delete24Regular
} from '@fluentui/react-icons'
import { RestaurantEntityType } from '../../api/restaurants/types.ts'
import './RestaurantListTable.scss'
import { RestaurantDetailsModal } from '../RestaurantDetailsModal'
import { useRestaurantDetailsModal } from '../RestaurantDetailsModal/useRestaurantDetailsModal.ts'
import { EditRestaurantModal } from '../EditRestaurantModal'
import { useEditRestaurantModal } from '../EditRestaurantModal/useEditRestaurantModal.ts'
import { useDeleteRestaurantModal } from '../DeleteRestaurantModal/useDeleteRestaurantModal.ts'
import { DeleteRestaurantModal } from '../DeleteRestaurantModal'

interface RestaurantListTableProps {
  data?: RestaurantEntityType[]
}

const columns = [
  { columnKey: 'name', label: 'Name', sortable: false, sortIcon: null },
  { columnKey: 'city', label: 'City', sortable: false, sortIcon: null },
  { columnKey: 'rating', label: 'Rating', sortable: true },
  { columnKey: 'actions', label: 'Actions', sortable: false, sortIcon: null }
]

const sortableColumns: TableColumnDefinition<RestaurantEntityType>[] = [
  createTableColumn<RestaurantEntityType>({
    columnId: 'name'
  }),
  createTableColumn<RestaurantEntityType>({
    columnId: 'city'
  }),
  createTableColumn<RestaurantEntityType>({
    columnId: 'rating',
    compare: (a, b) => {
      return a.rating - b.rating
    }
  }),
  createTableColumn<RestaurantEntityType>({
    columnId: 'actions'
  })
]

export const RestaurantListTable: FC<RestaurantListTableProps> = ({ data }) => {
  const {
    getRows,
    sort: { getSortDirection, toggleColumnSort, sort }
  } = useTableFeatures(
    {
      columns: sortableColumns,
      items: data || []
    },
    [
      useTableSort({
        defaultSortState: { sortColumn: 'rating', sortDirection: 'ascending' }
      })
    ]
  )

  const {
    open: detailsModalOpen,
    showRestaurantDetails,
    restaurantDetails
  } = useRestaurantDetailsModal()

  const { editRestaurant, editRestaurantModalProps } = useEditRestaurantModal()

  const { deleteRestaurant, deleteRestaurantModalProps } =
    useDeleteRestaurantModal()

  const headerSortProps = (columnId: TableColumnId) => ({
    onClick: (e: MouseEvent) => {
      toggleColumnSort(e, columnId)
    },
    sortDirection: getSortDirection(columnId)
  })

  const rows = sort(getRows())

  return (
    <>
      {!!rows?.length ? (
        <Table
          sortable
          arial-label='Default table'
          className='RestaurantListTable'
        >
          <TableHeader className='RestaurantListTable__Header'>
            <TableRow className='RestaurantListTable__Row'>
              {columns.map((column) => (
                <TableHeaderCell
                  className='RestaurantListTable__HeaderCell'
                  key={column.columnKey}
                  sortable={column.sortable}
                  sortIcon={column.sortIcon}
                  {...headerSortProps(column.columnKey)}
                >
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className='RestaurantListTable__Body'>
            {rows.map(({ item }) => (
              <TableRow key={item.id}>
                <TableCell data-label='Name'>{item.name}</TableCell>
                <TableCell data-label='City'>{item.city}</TableCell>
                <TableCell data-label='Rating' style={{ fontWeight: 500 }}>
                  {item.rating.toFixed(1)}
                </TableCell>
                <TableCell data-label='Actions'>
                  <div className='RestaurantListTable__Actions'>
                    <Button
                      icon={<Eye24Filled />}
                      onClick={() => showRestaurantDetails(item)}
                    />
                    <Button
                      icon={<Edit24Filled />}
                      onClick={() => editRestaurant(item)}
                    ></Button>
                    <Button
                      icon={<Delete24Regular />}
                      onClick={() => deleteRestaurant(item)}
                    ></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className='RestaurantListTable__Spinner'>
          <Spinner />
        </div>
      )}
      <EditRestaurantModal {...editRestaurantModalProps} />
      <DeleteRestaurantModal {...deleteRestaurantModalProps} />
      <RestaurantDetailsModal
        open={detailsModalOpen}
        restaurant={restaurantDetails}
        onClose={() => showRestaurantDetails(null)}
      />
    </>
  )
}
