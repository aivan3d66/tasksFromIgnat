import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

const s = require('./SuperSelect.module.css');

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<string>,
  onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange,
    onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: DefaultSelectPropsType[] = options ? options.map((o, i) => (
    <option key={o + '-' + i}>
      {o}
    </option>
  )) : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }

  return (
    <select onChange={onChangeCallback} {...restProps} className={s.select__list}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
