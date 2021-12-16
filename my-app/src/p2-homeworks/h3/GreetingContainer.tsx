import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {AddUserCallback, UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: AddUserCallback // need to fix any
}

export type SetNameCallback = (e: ChangeEvent<HTMLInputElement>) => void

export const ERROR_MESSAGE = `Please, enter the message`;

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>(ERROR_MESSAGE) // need to fix any


  const setNameCallback: SetNameCallback = (e) => { // need to fix any
    let inputValue = e.currentTarget.value
    if (inputValue.trim()) {
      setName(inputValue);
      setError(``)
    } else if (!inputValue) {
      setError(ERROR_MESSAGE)
      setName('')
    }
  }

  const addUser = () => {
    if (name !== "") {
      addUserCallback(name);
      alert(`Hello ${name}!`)
    } else {
      setError(ERROR_MESSAGE)
      alert(error)
    }// need to fix
  }

  const totalUsers = users.length; // need to fix
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
