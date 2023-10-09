import { useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'
import {
  RestaurantFields,
  RestaurantFormValues
} from '../../molecules/RestaurantInfoScreen'
import { useAddRestaurantApi } from '../../api/restaurants/addRestaurant/useAddRestaurantApi.ts'
import { QUERY_CACHE_KEYS } from '../../api/cacheKeys.ts'

const filters = {
  refetchInactive: true
}

export const useAddRestaurantModal = () => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const { addRestaurant } = useAddRestaurantApi({
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_CACHE_KEYS.restaurants, filters)
      setOpen(false)
    }
  })

  const initialValues = useMemo(() => {
    return {
      [RestaurantFields.NAME]: '',
      [RestaurantFields.CITY]: '',
      [RestaurantFields.RATING]: 1,
      [RestaurantFields.DESCRIPTION]: ''
    }
  }, [])

  const onSubmit = async (values: RestaurantFormValues) => {
    addRestaurant(values)
  }

  return {
    addRestaurant: setOpen,
    addRestaurantModalProps: {
      open,
      initialValues,
      onSubmit,
      onClose: () => setOpen(false)
    }
  }
}
