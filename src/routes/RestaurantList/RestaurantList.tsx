import { FC } from 'react'
import { Button } from '@fluentui/react-components'
import { PageLayout } from '../../layouts/PageLayout'
import { RestaurantListTable } from '../../features/RestaurantListTable'
import { Multiselect } from '../../atoms/Multiselect'
import { citiesOptions } from '../../constants/options.ts'
import { useRestaurantsList } from './useRestaurantsList.ts'
import './RestaurantList.scss'
import { AddRestaurantModal } from '../../features/AddRestaurantModal/AddRestaurantModal.tsx'
import { useAddRestaurantModal } from '../../features/AddRestaurantModal/useAddRestaurantModal.ts'

export const RestaurantList: FC = () => {
  const { restaurants, selectedOptions, setSelectedOptions } =
    useRestaurantsList()

  const { addRestaurant, addRestaurantModalProps } = useAddRestaurantModal()

  return (
    <PageLayout>
      <div className='RestaurantList__root'>
        <div className='RestaurantList__controls'>
          <Multiselect
            options={citiesOptions}
            selectedOptions={selectedOptions}
            placeholder='Select the city'
            label='Filter by city'
            onOptionSelect={(_e, data) =>
              setSelectedOptions(data.selectedOptions)
            }
          />
          <Button
            shape='circular'
            style={{ borderRadius: '8px' }}
            onClick={() => addRestaurant(true)}
          >
            Add New Restaurant
          </Button>
        </div>
        <RestaurantListTable data={restaurants} />
        <AddRestaurantModal {...addRestaurantModalProps} />
      </div>
    </PageLayout>
  )
}
