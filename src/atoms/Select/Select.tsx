import { FC, useCallback, useMemo } from 'react'
import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId
} from '@fluentui/react-components'
import { useField } from 'formik'
import type { DropdownProps } from '@fluentui/react-components'
import './Select.scss'

type OptionOnSelectData = {
  optionValue: string | undefined
  optionText: string | undefined
  selectedOptions: string[]
}
interface SelectProps extends Partial<DropdownProps> {
  name: string
  options: Array<string>
  label: string
  placeholder: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('2px')
  }
})

export const Select: FC<SelectProps> = ({
  options,
  label,
  placeholder,
  name,
  ...props
}) => {
  const [field, meta, helpers] = useField<string>({ name })
  const hasError = Boolean(meta && meta.error)
  const selectId = useId('select-single')
  const styles = useStyles()

  const value = useMemo(() => {
    if (field.value) {
      if (!options.find((opt) => field.value && opt === field.value)) {
        options.unshift(field.value)
      }

      return field.value
    }

    return ''
  }, [field.value, options])

  const handleSelect = useCallback(
    (_e: any, data: OptionOnSelectData) => {
      helpers.setValue(data.optionValue!)
    },
    [field.value, meta.initialValue, helpers.setValue, options]
  )

  const handleFocus = useCallback(() => {
    helpers.setError('')
  }, [helpers])

  return (
    <div className={styles.root}>
      <label htmlFor={selectId}>{label}</label>
      <Dropdown
        {...props}
        aria-labelledby={selectId}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onOptionSelect={handleSelect}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Dropdown>
      {hasError && <div>{meta.error}</div>}
    </div>
  )
}
