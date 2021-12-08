import React from 'react'
import MessagesContainer from "./MessagesContainer";

const style = require('./Message.module.css');

function HW1() {
  return (
    <div className={style.messageList}>
      <hr/>
      <h2>Homeworks 1</h2>

      {/*should work (должно работать)*/}

      <MessagesContainer/>

      {/*для личного творчества, могу проверить*/}
      {/*Альтернативное сообщение реализовано при помощи react-redux*/}
      <hr/>
    </div>
  )
}

export default HW1
