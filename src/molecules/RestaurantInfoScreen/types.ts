export enum RestaurantFields {
  NAME = 'name',
  CITY = 'city',
  RATING = 'rating',
  DESCRIPTION = 'description'
}

export interface RestaurantFormValues {
  name: string
  city: string
  rating: number
  description: string
}
