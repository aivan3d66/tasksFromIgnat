import React, {useState, MouseEvent} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
  users: any // need to fix any
  addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<any>('') // need to fix any
  const [error, setError] = useState<any>(false) // need to fix any

  const setNameCallback = (e: MouseEvent<HTMLButtonElement>) => { // need to fix any
    let val = e.currentTarget.value;
    if (val) setName(val) // need to fix
    if (!val) setError(!error)
  }

  const addUser = () => {
    if (name !== "") {
      addUserCallback(name);
      alert(`Hello  ${name}!`)
    } else if (!name) {
      setError(!error)
      alert(`ERROR`)
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
