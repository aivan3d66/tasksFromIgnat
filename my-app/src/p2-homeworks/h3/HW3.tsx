import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4 as uuidv4} from 'uuid';
import s from "./Greeting.module.css";

// types
export type UserType = {
  _id: string // need to fix any
  name: string // need to fix any
}

export type AddUserCallback = (name: string) => any

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

  const addUserCallback: AddUserCallback = (name) => { // need to fix any
    setUsers([...users, {_id: uuidv4(), name}]); // need to fix
  }

  console.log(users);
  return (
    <div className={s.inputForm__wrapper}>
      <hr/>
      <h2>Homeworks 3</h2>

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
