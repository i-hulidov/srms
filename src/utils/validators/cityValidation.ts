import * as Yup from 'yup'

export const cityValidation = Yup.string()
  .required('Please enter city')
  .min(1, 'City is too short, please add more characters to it')
  .max(64, 'Please don’t use more than 64 characters')
