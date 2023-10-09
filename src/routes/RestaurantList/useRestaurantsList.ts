import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { useGetRestaurantsAPI } from '../../api/restaurants/getRestaurants/useGetRestaurantsApi.ts'

export const useRestaurantsList = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const { restaurants, getRestaurants } = useGetRestaurantsAPI({
    selectedOptions
  })

  const makeRequest = useCallback(
    debounce(getRestaurants, 500, { leading: false, trailing: true }),
    [getRestaurants]
  )

  useEffect(() => {
    makeRequest()
  }, [makeRequest, selectedOptions])

  return { restaurants, selectedOptions, setSelectedOptions }
}
