import {
  SuccessResponse,
  ErrorResponse,
  MutationRequestFunction
} from '../../types.ts'
import { RestaurantEntityType } from '../types.ts'
import { ErrorType } from '../../commonTypes.ts'
import { apiRoutes } from '../../apiRoutes.ts'

export type AddRestaurantProps = {
  name: string
  city: string
  rating: number
  description?: string
}

export type AddRestaurantSuccessResponse = SuccessResponse<RestaurantEntityType>
export type AddRestaurantErrorResponse = ErrorResponse<ErrorType>
export const addRestaurant: MutationRequestFunction<
  AddRestaurantSuccessResponse,
  AddRestaurantProps
> = (axiosInstance) => async (restaurant) => {
  return axiosInstance.post(`${apiRoutes.restaurants}`, restaurant)
}
