import { useQuery } from 'react-query'
import {
  getRestaurants,
  GetRestaurantsErrorResponse,
  GetRestaurantsProps,
  GetRestaurantsSuccessResponse
} from './getRestaurants.ts'
import { QueryOptions } from '../../types.ts'
import { QUERY_CACHE_KEYS } from '../../cacheKeys.ts'
import { axiosClient } from '../../axiosClient.ts'

export const useGetUsersAPI = (
  queries: GetRestaurantsProps,
  options: QueryOptions<
    GetRestaurantsSuccessResponse,
    GetRestaurantsErrorResponse
  > = {}
) => {
  const { isLoading, isRefetching, data, refetch } = useQuery<
    GetRestaurantsSuccessResponse,
    GetRestaurantsErrorResponse
  >(QUERY_CACHE_KEYS.restaurants, getRestaurants(axiosClient, queries), {
    ...options
  })

  return {
    isLoading: isLoading || isRefetching,
    response: data,
    restaurants: data?.data,
    getRestaurants: refetch
  }
}
