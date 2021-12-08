import React from 'react'
import Message from './Message'
const style = require('./Message.module.css');

export type MessageDataType = {
  avatar: string,
  name: string,
  message: string,
  time: string,
}

const messageData: MessageDataType = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'MrEpickMann',
  message: 'It was said that Eleanor Weaver could take an old tree stump and make it taste like sweet rabbit stew.',
  time: '22:00',
}

function HW1() {
  return (
    <div className={style.messageList}>
      <hr/>
      <h2>Homeworks 1</h2>

      {/*should work (должно работать)*/}

      <Message
          avatar={messageData.avatar}
          name={messageData.name}
          message={messageData.message}
          time={messageData.time}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr/>
    </div>
  )
}

export default HW1
