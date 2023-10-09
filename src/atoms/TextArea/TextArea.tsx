import { useCallback } from 'react'
import {
  useId,
  Field,
  Textarea as FUITextarea,
  makeStyles,
  tokens
} from '@fluentui/react-components'
import type { TextareaProps as FUITextareaProps } from '@fluentui/react-components'
import { useField } from 'formik'

interface InputProps extends FUITextareaProps {
  name: string
  label: string
}

const useStyles = makeStyles({
  error: {
    color: tokens.colorStatusDangerForeground1
  }
})

export const Textarea = ({ label, name, ...props }: InputProps) => {
  const [field, meta, helpers] = useField<string>({ name })
  const hasError = Boolean(meta && meta.error)
  const areaId = useId('textArea')
  const styles = useStyles()

  const handleFocus = useCallback(() => {
    helpers.setError('')
  }, [helpers])

  return (
    <div>
      <Field label={label}>
        <FUITextarea id={areaId} {...props} {...field} onFocus={handleFocus} />
      </Field>
      {hasError && <div className={styles.error}>{meta.error}</div>}
    </div>
  )
}
