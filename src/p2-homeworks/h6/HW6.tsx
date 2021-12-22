import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

const s = require('./HW6.module.css');

function HW6() {
  const [value, setValue] = useState<string>('')

  const save = () => {
    saveState<string>('editable-span-value', value)
  }
  const restore = () => {
    let valueFromStore = restoreState('editable-span-value', value);
    setValue(`${valueFromStore}`)
  }

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 6</h2>

      {/*should work (должно работать)*/}
      <div className={s.inputWrapper}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{children: value ? undefined : 'enter text...'}}
        />
      </div>
      <div className={s.btnWrapper}>
        <SuperButton onClick={save}>save</SuperButton>
        <SuperButton onClick={restore}>restore</SuperButton>
      </div>

      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
    </div>
  )
}

export default HW6
