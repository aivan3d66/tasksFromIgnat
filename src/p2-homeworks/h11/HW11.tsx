import React, {useState} from 'react'
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

  const onSetResultHandler = (value: any) => {
    setResult(value)
  }
  console.log(result)
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
        <span>{result[0]}</span>
        <SuperDoubleRange
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP_VALUE}
          allowCross={ALLOW_CROSS}
          defaultValue={result}
          onChangeRange={onSetResultHandler}
        />
        <span>{result[1]}</span>
      </div>
    </div>
  )
}

export default HW11
