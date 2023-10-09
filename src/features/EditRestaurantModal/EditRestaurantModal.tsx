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

export const EditRestaurantModal: FC<RestaurantDetailsModalProps> = (props) => {
  return (
    <RestaurantInfoScreen
      title='Edit the restaurant'
      buttonTitle='Save'
      {...props}
    />
  )
}
