import React from 'react'
import s from './Greeting.module.css'
import {AddUser, OnEnter, SetNameCallback} from './GreetingContainer'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: SetNameCallback // need to fix any
  addUser: AddUser // need to fix any
  onEnter: OnEnter,
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : "" // need to fix with (?:)
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
      {/*<button onClick={addUser} className={s.inputButton} disabled={isDisabled}>add</button>*/}
      <SuperButton onClick={addUser} disabled={isDisabled} className={s.inputButton}>
        add
      </SuperButton>
      <span className={s.inputUsersCount}>Total users: {totalUsers}</span>
    </div>

  )
}

export default Greeting
