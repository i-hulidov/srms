import * as Yup from 'yup'
import { RestaurantFields } from './types.ts'
import { nameValidation } from '../../utils/validators/nameValidation.ts'
import { cityValidation } from '../../utils/validators/cityValidation.ts'
import { ratingValidation } from '../../utils/validators/ratingValidation.ts'
import { descriptionValidation } from '../../utils/validators/descriptionValidation.ts'

export const restaurantSchema = Yup.object().shape({
  [RestaurantFields.NAME]: nameValidation,
  [RestaurantFields.CITY]: cityValidation,
  [RestaurantFields.RATING]: ratingValidation,
  [RestaurantFields.DESCRIPTION]: descriptionValidation
})
