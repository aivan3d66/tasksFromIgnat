import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './../c7-SuperRange/SuperRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange: (value: number[]) => void,
  defaultValue?: [number, number],
  disable?: boolean,
  min?: number,
  max?: number,
  step?: number,
  value?: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange,
    defaultValue,
    disable,
    min,
    max,
    step,
    value,
  }
) => {

  return (
    <>
      <Range
        className={s.range}
        min={min}
        max={max}
        step={step}
        allowCross={disable}
        defaultValue={defaultValue}
        value={value}
        onChange={onChangeRange}
      />
    </>
  )
}

export default SuperDoubleRange
