import { useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'
import { RestaurantEntityType } from '../../api/restaurants/types.ts'
import {
  RestaurantFields,
  RestaurantFormValues
} from '../../molecules/RestaurantInfoScreen'
import { useEditRestaurantAPI } from '../../api/restaurants/editRestaurant/useEditRestaurantApi.ts'
import { QUERY_CACHE_KEYS } from '../../api/cacheKeys.ts'

const formValuesToRestaurantInfoProps = (
  restaurantId: number,
  values: RestaurantFormValues
) => {
  return {
    id: restaurantId.toString(),
    ...values
  }
}

const filters = {
  refetchInactive: true
}

export const useEditRestaurantModal = () => {
  const queryClient = useQueryClient()
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantEntityType | null>(null)

  const { editRestaurant } = useEditRestaurantAPI({
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_CACHE_KEYS.restaurants, filters)
      setSelectedRestaurant(null)
    }
  })

  const initialValues = useMemo(() => {
    return {
      [RestaurantFields.NAME]: selectedRestaurant?.name ?? '',
      [RestaurantFields.CITY]: selectedRestaurant?.city ?? '',
      [RestaurantFields.RATING]: selectedRestaurant?.rating ?? 1,
      [RestaurantFields.DESCRIPTION]: selectedRestaurant?.description ?? ''
    }
  }, [selectedRestaurant])

  const onSubmit = async (values: RestaurantFormValues) => {
    if (selectedRestaurant) {
      editRestaurant(
        formValuesToRestaurantInfoProps(selectedRestaurant.id, values)
      )
    }
  }

  return {
    restaurantToEdit: selectedRestaurant,
    editRestaurant: setSelectedRestaurant,
    editRestaurantModalProps: {
      open: !!selectedRestaurant,
      initialValues,
      onSubmit,
      onClose: () => setSelectedRestaurant(null)
    }
  }
}
