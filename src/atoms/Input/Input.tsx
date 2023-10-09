import { useCallback } from 'react'
import {
  makeStyles,
  shorthands,
  useId,
  Input as FUIInput,
  Label
} from '@fluentui/react-components'
import type { InputProps as FUIInputProps } from '@fluentui/react-components'
import { useField } from 'formik'

interface InputProps extends FUIInputProps {
  name: string
  label: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('2px')
  }
})

export const Input = ({ label, name, ...props }: InputProps) => {
  const [field, meta, helpers] = useField<string>({ name })
  const hasError = Boolean(meta && meta.error)
  const inputId = useId('input')
  const styles = useStyles()

  const handleFocus = useCallback(() => {
    helpers.setError('')
  }, [helpers])

  return (
    <div className={styles.root}>
      <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
        {label}
      </Label>
      <FUIInput id={inputId} {...props} {...field} onFocus={handleFocus} />
      {hasError && <div>{meta.error}</div>}
    </div>
  )
}
