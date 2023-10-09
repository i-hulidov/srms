import { useMutation } from 'react-query'
import {
  deleteRestaurant,
  DeleteRestaurantErrorResponse,
  DeleteRestaurantProps,
  DeleteRestaurantSuccessResponse
} from './deleteRestaurant.ts'
import { MutationOptions } from '../../types.ts'
import { axiosClient } from '../../axiosClient.ts'

export const useDeleteRestaurantApi = (
  options: MutationOptions<
    DeleteRestaurantSuccessResponse,
    DeleteRestaurantErrorResponse,
    DeleteRestaurantProps
  > = {}
) => {
  const { isLoading, data, mutate } = useMutation<
    DeleteRestaurantSuccessResponse,
    DeleteRestaurantErrorResponse,
    DeleteRestaurantProps
  >(deleteRestaurant(axiosClient), options)

  return {
    isLoading,
    response: data,
    deleteRestaurant: mutate
  }
}
