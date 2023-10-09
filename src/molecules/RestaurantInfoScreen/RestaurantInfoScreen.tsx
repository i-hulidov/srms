import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger
} from '@fluentui/react-components'
import { Form, Formik, FormikProps } from 'formik'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/TextArea'
import { restaurantSchema } from './validation.ts'
import { FC, useCallback, useRef } from 'react'
import { RestaurantFields, RestaurantFormValues } from './types.ts'
import './RestaurantInfoScreen.scss'
import { Select } from '../../atoms/Select'
import { citiesOptions } from '../../constants/options.ts'

interface RestaurantInfoScreenProps {
  title: string
  buttonTitle: string
  open: boolean
  onSubmit: (values: RestaurantFormValues) => void
  initialValues: RestaurantFormValues
  onClose: () => void
}
export const RestaurantInfoScreen: FC<RestaurantInfoScreenProps> = ({
  title,
  buttonTitle,
  open,
  initialValues,
  onSubmit,
  onClose
}) => {
  const formRef = useRef<FormikProps<typeof initialValues>>(null)

  const handleClose = useCallback(() => {
    onClose()
    formRef.current?.resetForm()
  }, [onClose])

  const triggerSubmit = useCallback(() => {
    formRef.current?.submitForm()
  }, [formRef.current])

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
      validationSchema={restaurantSchema}
      enableReinitialize
    >
      {(formik) => (
        <Dialog open={open} onOpenChange={handleClose}>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>{title}</DialogTitle>
              <DialogContent>
                <Form>
                  <div className='RestaurantInfoScreen__Content'>
                    <Input label='Name' name={RestaurantFields.NAME} />
                    <Select
                      options={citiesOptions}
                      name={RestaurantFields.CITY}
                      label='City'
                      placeholder='Select the city'
                    />
                    {/*<Input label='City' name={RestaurantFields.CITY} />*/}
                    <Input label='Rating' name={RestaurantFields.RATING} />
                    <Textarea
                      label='Description (optional)'
                      name={RestaurantFields.DESCRIPTION}
                    />
                  </div>
                </Form>
              </DialogContent>
              <DialogActions>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance='secondary'>Close</Button>
                </DialogTrigger>
                <Button
                  disabled={!formik.dirty}
                  appearance='primary'
                  onClick={triggerSubmit}
                >
                  {buttonTitle}
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      )}
    </Formik>
  )
}
