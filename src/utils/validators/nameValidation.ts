import * as Yup from 'yup'

export const nameValidation = Yup.string()
  .required('Please enter name')
  .min(1, 'Name is too short, please add more characters to it')
  .max(64, 'Please don’t use more than 64 characters')