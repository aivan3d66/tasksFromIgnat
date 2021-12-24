import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const s = require('./HW9.module.css')

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()}`;
  const stringDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className={s.clockContainer}>
      <div
        className={s.clockControllers}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>
      <div>
        {show && (
          <div className={s.clockDate}>
            {stringDate}
          </div>
        )}
      </div>
      <div className={s.clockBtnWrapper}>
        <SuperButton
          onClick={start}
          className={s.clockBtn}>Start timer</SuperButton>
        <SuperButton
          onClick={stop}
          className={s.clockBtn}>Stop timer</SuperButton>
      </div>
    </div>
  )
}

export default Clock
