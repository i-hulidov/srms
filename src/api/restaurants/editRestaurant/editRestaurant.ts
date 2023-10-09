import {
  SuccessResponse,
  ErrorResponse,
  MutationRequestFunction
} from '../../types.ts'
import { RestaurantEntityType } from '../types.ts'
import { ErrorType } from '../../commonTypes.ts'
import { apiRoutes } from '../../apiRoutes.ts'

export type EditRestaurantProps = { id: string } & {
  name: string
  city: string
  rating: number
  description?: string
}

export type EditRestaurantSuccessResponse =
  SuccessResponse<RestaurantEntityType>
export type EditRestaurantErrorResponse = ErrorResponse<ErrorType>
export const editRestaurant: MutationRequestFunction<
  EditRestaurantSuccessResponse,
  EditRestaurantProps
> =
  (axiosInstance) =>
  async ({ id, ...restaurant }) => {
    return axiosInstance.put(`${apiRoutes.restaurants}/${id}`, restaurant)
  }
