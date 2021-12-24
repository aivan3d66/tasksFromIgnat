import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {AddUserCallback, UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: AddUserCallback
}

export type SetNameCallback = (e: ChangeEvent<HTMLInputElement>) => void;
export type OnEnter = (e: KeyboardEvent<HTMLInputElement>) => void;
export type AddUser = () => void;

export const ERROR_MESSAGE: string = `Please, enter the message`;

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');


  const setNameCallback: SetNameCallback = (e) => {
    const inputValue = e.currentTarget.value.trim();

    if (inputValue) {
      setName(inputValue);
      error && setError(``)
    } else if (!inputValue) {
      name && setName('')
      setError(ERROR_MESSAGE)
    }
  }

  const addUser: AddUser = () => {
    if (name) {
      addUserCallback(name);
      alert(`Hello ${name}!`)
      setName('')
    }
  }

  const onEnter: OnEnter = (e) => {
    if (e.key === "Enter" && name) {
      addUser()
    }
  }

  const totalUsers = users.length;
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      onEnter={onEnter}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
