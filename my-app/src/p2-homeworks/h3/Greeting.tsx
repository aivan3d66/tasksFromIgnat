import React, {MouseEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)

    return (
        <div className={s.inputForm}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.inputErrorText}>{error}</span>
            <button onClick={addUser} className={s.inputButton}>add</button>
            <span className={s.inputUsersCount}>Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
