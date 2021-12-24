import React from 'react'
import Clock from './Clock'

const s = require('./HW9.module.css')

function HW9() {
  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 9</h2>
      <Clock/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeClock/>*/}
    </div>
  )
}

export default HW9
