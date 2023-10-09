import {
  QueryRequestFunction,
  SuccessResponse,
  ErrorResponse
} from '../../types.ts'
import { RestaurantEntityType } from '../types.ts'
import { ErrorType } from '../../commonTypes.ts'
import { apiRoutes } from '../../apiRoutes.ts'

export type GetRestaurantsProps = {
  selectedOptions?: string[]
}

export type GetRestaurantsSuccessResponse = SuccessResponse<
  RestaurantEntityType[]
>
export type GetRestaurantsErrorResponse = ErrorResponse<ErrorType>
export const getRestaurants: QueryRequestFunction<
  GetRestaurantsSuccessResponse,
  GetRestaurantsProps
> =
  (axiosInstance, { selectedOptions }) =>
  async () => {
    return axiosInstance.get(`${apiRoutes.restaurants}`, {
      params: {
        selectedOptions
      },
      // paramsSerializer: (params) => qs.stringify(params)
    })
  }
