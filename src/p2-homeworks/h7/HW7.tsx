import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const s = require('./HW7.module.css');
const arr: Array<string> = ['x', 'y', 'z']

function HW7() {
  const [value, onChangeOption] = useState(arr[1])

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 7</h2>

      {/*should work (должно работать)*/}
      <div className={s.selectorWrapper}>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div className={s.radioWrapper}>
        <SuperRadio
          name={'radio'}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperSelect/>*/}
      {/*<AlternativeSuperRadio/>*/}
    </div>
  )
}

export default HW7
