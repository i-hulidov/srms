import { useCallback } from 'react'
import {
  useId,
  Field,
  Textarea as FUITextarea
} from '@fluentui/react-components'
import type { TextareaProps as FUITextareaProps } from '@fluentui/react-components'
import { useField } from 'formik'

interface InputProps extends FUITextareaProps {
  name: string
  label: string
}

export const Textarea = ({ label, name, ...props }: InputProps) => {
  const [field, meta, helpers] = useField<string>({ name })
  const hasError = Boolean(meta && meta.error)
  const areaId = useId('textArea')

  const handleFocus = useCallback(() => {
    helpers.setError('')
  }, [helpers])

  return (
    <div>
      <Field label={label}>
        <FUITextarea id={areaId} {...props} {...field} onFocus={handleFocus} />
      </Field>
      {hasError && <div>{meta.error}</div>}
    </div>
  )
}
