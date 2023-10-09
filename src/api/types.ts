import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { QueryFunction, MutationFunction, UseMutationOptions, UseQueryOptions } from 'react-query'

export type SuccessResponse<TData = object> = AxiosResponse<TData>

export type ErrorResponse<TError extends object = object> = AxiosError<TError>

export type MutationOptions<
  TSuccess extends SuccessResponse,
  TError extends ErrorResponse,
  TProps = unknown
> = UseMutationOptions<TSuccess, TError, TProps>

export type QueryOptions<
  TSuccess extends AxiosResponse = SuccessResponse,
  TError extends ErrorResponse = ErrorResponse
> = UseQueryOptions<TSuccess, TError>

export type MutationRequestFunction<
  TSuccess extends SuccessResponse,
  TProps = unknown,
  TCreatorProps = void
> = (
  axiosInstance: AxiosInstance,
  props: TCreatorProps
) => MutationFunction<TSuccess, TProps>

export type QueryRequestFunction<
  TSuccess extends AxiosResponse,
  TProps = void
> = (axiosInstance: AxiosInstance, props: TProps) => QueryFunction<TSuccess>
