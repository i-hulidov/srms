import { useMutation } from 'react-query'
import {
  addRestaurant,
  AddRestaurantErrorResponse,
  AddRestaurantProps,
  AddRestaurantSuccessResponse
} from './addRestaurant.ts'
import { MutationOptions } from '../../types.ts'
import { axiosClient } from '../../axiosClient.ts'

export const useAddRestaurantApi = (
  options: MutationOptions<
    AddRestaurantSuccessResponse,
    AddRestaurantErrorResponse,
    AddRestaurantProps
  > = {}
) => {
  const { isLoading, data, mutate } = useMutation<
    AddRestaurantSuccessResponse,
    AddRestaurantErrorResponse,
    AddRestaurantProps
  >(addRestaurant(axiosClient), options)

  return {
    isLoading,
    response: data,
    addRestaurant: mutate
  }
}
