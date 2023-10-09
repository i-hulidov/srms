import { FC } from 'react'
import {
  RestaurantInfoScreen,
  RestaurantFormValues
} from '../../molecules/RestaurantInfoScreen'

interface RestaurantDetailsModalProps {
  open: boolean
  onSubmit: (values: RestaurantFormValues) => void
  initialValues: RestaurantFormValues
  onClose: () => void
}

export const AddRestaurantModal: FC<RestaurantDetailsModalProps> = (props) => {
  return <RestaurantInfoScreen title='Add new restaurant' buttonTitle="Add" {...props} />
}
