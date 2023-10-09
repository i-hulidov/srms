import { useMutation } from 'react-query'
import {
  editRestaurant,
  EditRestaurantErrorResponse,
  EditRestaurantProps,
  EditRestaurantSuccessResponse
} from './editRestaurant.ts'
import { MutationOptions } from '../../types.ts'
import { axiosClient } from '../../axiosClient.ts'

export const useEditRestaurantAPI = (
  options: MutationOptions<
    EditRestaurantSuccessResponse,
    EditRestaurantErrorResponse,
    EditRestaurantProps
  > = {}
) => {
  const { isLoading, data, mutate } = useMutation<
    EditRestaurantSuccessResponse,
    EditRestaurantErrorResponse,
    EditRestaurantProps
  >(editRestaurant(axiosClient), options)

  return {
    isLoading,
    response: data,
    editRestaurant: mutate
  }
}
