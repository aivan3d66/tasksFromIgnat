import React from 'react';
import logoUser from './iconUser.png'
const style = require('./Message.module.css');

function Message(props: any) {
  const userAvatar = props.avatar ? props.avatar : logoUser;
  return (
    <div className={style.message}>
      <div className={style.messageImg}>
        <img src={userAvatar} alt="user-avatar"/>
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

export default Message;
