import {
  SuccessResponse,
  ErrorResponse,
  MutationRequestFunction
} from '../../types.ts'
import { RestaurantEntityType } from '../types.ts'
import { ErrorType } from '../../commonTypes.ts'
import { apiRoutes } from '../../apiRoutes.ts'

export type DeleteRestaurantProps = { id: string }

export type DeleteRestaurantSuccessResponse =
  SuccessResponse<RestaurantEntityType>
export type DeleteRestaurantErrorResponse = ErrorResponse<ErrorType>
export const deleteRestaurant: MutationRequestFunction<
  DeleteRestaurantSuccessResponse,
  DeleteRestaurantProps
> =
  (axiosInstance) =>
  async ({ id }) => {
    return axiosInstance.delete(`${apiRoutes.restaurants}/${id}`)
  }
