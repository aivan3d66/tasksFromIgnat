import React, {useState} from 'react'
import {ACTION_PAYLOAD, FILTER, homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const s = require('./HW8.module.css');

export type UserType = {
  _id: number,
  name: string,
  age: number,
}

const initialPeople: Array<UserType> = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople);

  const finalPeople = people.map((p: UserType) => (
    <tbody key={p._id}>
      <tr>
        <td className={s.leftCol}>name:</td>
        <td>{p.name},</td>
      </tr>
      <tr>
        <td className={s.leftCol}>age:</td>
        <td>{p.age}</td>
      </tr>
    </tbody>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, {
    type: FILTER.SORT,
    payload: ACTION_PAYLOAD.UP
  }))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, {
    type: FILTER.SORT,
    payload: ACTION_PAYLOAD.DOWN
  }))
  const sortMin = () => setPeople(homeWorkReducer(initialPeople, {
    type: FILTER.CHECK,
    payload: 18
  }))

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 8</h2>
      <table className={s.peopleList}>
        <caption>Some user information:</caption>
        {finalPeople}
      </table>

      <div className={s.controlWrapper}>
        <div>
          <SuperButton onClick={sortUp} className={s.controlBtn}>sort up</SuperButton>
        </div>
        <div>
          <SuperButton onClick={sortDown} className={s.controlBtn}>sort down</SuperButton>
        </div>
        <div>
          <SuperButton onClick={sortMin} className={s.controlBtn}>check 18</SuperButton>
        </div>
      </div>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
    </div>
  )
}

export default HW8
