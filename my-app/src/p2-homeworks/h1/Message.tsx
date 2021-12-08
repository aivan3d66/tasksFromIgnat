import React from 'react';
import {MessageDataType} from './HW1';
const style = require('./Message.module.css');


function Message(props: MessageDataType) {
  return (
    <div className={style.message}>
      <div className={style.messageImg}>
        <img src={props.avatar} alt="user-avatar"/>
      </div>
      <div className={style.messageContent}>
        <div className={style.messageText}>
          <h3>{props.name}</h3>
          <p>{props.message}</p>
        </div>
        <div className={style.messageData}>
          {props.time}
        </div>
      </div>
    </div>
  )
}

export default Message
