import * as Yup from 'yup'

export const ratingValidation = Yup.number()
  .required('Please enter rating')
  .min(1, 'Rating should be at least 1')
  .max(5, 'Rating should be not greater than 5')
  .test(
    'is-decimal',
    'Rating must have 1 digit after decimal or less',
    (number) => /^\d+(\.\d{1})?$/.test(String(number))
  )
