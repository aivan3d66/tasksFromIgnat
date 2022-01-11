import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css';

const MIN_VALUE: number = 0;
const MAX_VALUE: number = 100;
const STEP_VALUE: number = 1;
const ALLOW_CROSS: boolean = false

function HW11() {
  const [value1, setValue1] = useState<number>(MIN_VALUE);
  const [value2, setValue2] = useState<number>(MAX_VALUE);
  const [values, setValues] = useState<any>([value1, value2])

  useEffect(() => {
    setValues([value1, value2])
  }, [value1, value2])

  const onChangeRangeFirstHandler = (value: number) => {
    setValue1(value);
  }

  const onChangeRangeSecondHandler = (value: number[]) => {
    setValues(value);
    setValue1(value[0]);
    setValue2(value[1])
  }

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 11</h2>

      <div className={s.rangeWrapper}>
        <span>{value1}</span>
        <SuperRange
          value={value1}
          onChangeRange={onChangeRangeFirstHandler}
        />
      </div>

      <div className={s.rangeWrapper}>
        <span>{values[0]}</span>
        <SuperDoubleRange
          step={STEP_VALUE}
          disable={ALLOW_CROSS}
          value={values}
          onChangeRange={onChangeRangeSecondHandler}
        />
        <span>{values[1]}</span>
      </div>
    </div>
  )
}

export default HW11
