import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { RestaurantEntityType } from '../../api/restaurants/types.ts'
import { QUERY_CACHE_KEYS } from '../../api/cacheKeys.ts'
import { useDeleteRestaurantApi } from '../../api/restaurants/deleteRestaurant/useDeleteRestaurantApi.ts'

export const useDeleteRestaurantModal = () => {
  const queryClient = useQueryClient()
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantEntityType | null>(null)

  const { deleteRestaurant } = useDeleteRestaurantApi({
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_CACHE_KEYS.restaurants)
      setSelectedRestaurant(null)
    }
  })

  const onSubmit = async () => {
    if (selectedRestaurant) {
      deleteRestaurant({ id: selectedRestaurant.id.toString() })
    }
  }

  return {
    restaurantToEdit: selectedRestaurant,
    deleteRestaurant: setSelectedRestaurant,
    deleteRestaurantModalProps: {
      open: !!selectedRestaurant,
      onSubmit,
      onClose: () => setSelectedRestaurant(null)
    }
  }
}
