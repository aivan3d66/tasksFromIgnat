import React, {useState, MouseEvent} from 'react'
import Greeting from './Greeting'
import {AddUserCallback, UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: AddUserCallback // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: MouseEvent<HTMLInputElement>) => { // need to fix any
    let inputValue = e.currentTarget.value
    if (inputValue) {
      setName(inputValue);
      setError(``)
    } else if (!inputValue) {
      setError(`Please, enter the message`)
      setName('')
    }
  }

  const addUser = () => {
    if (name !== "") {
      addUserCallback(name);
      alert(`Hello ${name}!`)
    } else {
      setError(`Please, enter the message`)
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
