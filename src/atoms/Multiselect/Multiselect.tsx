import { FC } from 'react'
import { Dropdown, Option, useId } from '@fluentui/react-components'
import type { DropdownProps } from '@fluentui/react-components'
import './Multiselect.scss'

interface MultiselectProps extends Partial<DropdownProps> {
  options: string[]
  label: string
  placeholder: string
}

export const Multiselect: FC<MultiselectProps> = ({
  options,
  label,
  placeholder,
  ...props
}) => {
  const comboId = useId('combo-multi')

  return (
    <div className='Multiselect__root'>
      <label id={comboId} className='Multiselect__label'>
        {label}
      </label>
      <Dropdown
        aria-labelledby={comboId}
        multiselect={true}
        placeholder={placeholder}
        {...props}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Dropdown>
    </div>
  )
}
