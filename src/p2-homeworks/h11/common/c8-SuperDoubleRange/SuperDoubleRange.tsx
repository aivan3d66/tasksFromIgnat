import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './../c7-SuperRange/SuperRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange: any,
  defaultValue?: [number, number],
  allowCross: boolean,
  min: number,
  max: number,
  step: number
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange,
    defaultValue,
    allowCross,
    min,
    max,
    step,
    // min, max, step, disable, ...
  }
) => {
  // сделать самому, можно подключать библиотеки

  return (
    <>
      <Range
        className={s.range}
        min={min}
        max={max}
        step={step}
        allowCross={allowCross}
        defaultValue={defaultValue}
        onChange={onChangeRange}
      />
    </>
  )
}

export default SuperDoubleRange
