import { useState } from 'react'
import { RestaurantEntityType } from '../../api/restaurants/types.ts'

export const useRestaurantDetailsModal = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantEntityType | null>(null)

  return {
    open: !!selectedRestaurant,
    restaurantDetails: selectedRestaurant,
    showRestaurantDetails: setSelectedRestaurant
  }
}
