import React from 'react'
import s from './Greeting.module.css'
import {AddUser, OnEnter, SetNameCallback} from './GreetingContainer'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string,
  setNameCallback: SetNameCallback,
  addUser: AddUser,
  onEnter: OnEnter,
  error: string,
  totalUsers: number,
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onEnter}
) => {
  const inputClass = error ? s.error : "";
  const isDisabled = !!error;

  return (
    <div className={s.inputForm}>
      <input value={name}
             onChange={setNameCallback}
             onBlur={setNameCallback}
             onKeyPress={onEnter}
             className={inputClass}/>
      {error
        ? <span className={s.inputErrorText}>{error}</span>
        : null}
      <SuperButton onClick={addUser} disabled={isDisabled} className={s.inputButton}>
        add
      </SuperButton>
      <span className={s.inputUsersCount}>Total users: {totalUsers}</span>
    </div>
  )
}

export default Greeting
