import { useState } from 'react'
import { useGetUsersAPI } from '../../api/restaurants/getRestaurants/useGetRestaurantsApi.ts'

export const useRestaurantsList = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const { restaurants } = useGetUsersAPI({ selectedOptions })

  return { restaurants, selectedOptions, setSelectedOptions }
}
