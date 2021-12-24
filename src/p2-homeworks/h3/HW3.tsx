import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';
import s from "./Greeting.module.css";

// types
export type UserType = {
  _id: string
  name: string
}

export type AddUserCallback = (name: string) => void

function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([])

  const addUserCallback: AddUserCallback = (name) => {
    setUsers([...users, {_id: v1(), name}]);
  }

  return (
    <div className={s.inputForm__wrapper}>
      <h2>Homeworks 3</h2>
      <GreetingContainer
        users={users}
        addUserCallback={addUserCallback}
      />
      {/*<AlternativeGreeting/>*/}
    </div>
  )
}

export default HW3
