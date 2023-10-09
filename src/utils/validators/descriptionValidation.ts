import * as Yup from 'yup'

export const descriptionValidation = Yup.string().max(
  512,
  'Please don’t use more than 512 characters'
)
