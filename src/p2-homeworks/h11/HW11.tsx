import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css';

const MIN_VALUE: number = 0;
const MAX_VALUE: number = 100;

function HW11() {
  const [value1, setValue1] = useState<any>(MIN_VALUE)
  const [value2, setValue2] = useState<any>(MAX_VALUE)

  const onChangeRangeFirstHandler = (value: number) => setValue1(value);
  // const onChangeRangeSecondHandler = (value: number) => setValue2(value);

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 11</h2>

      {/*should work (должно работать)*/}
      <div className={s.rangeWrapper}>
        <span>{value1}</span>
        <SuperRange
          defaultValue={value1}
          onChangeRange={onChangeRangeFirstHandler}
        />
      </div>

      <div className={s.rangeWrapper}>
        <span>{value1}</span>
        <SuperDoubleRange/>
        <span>{value2}</span>
      </div>
    </div>
  )
}

export default HW11
