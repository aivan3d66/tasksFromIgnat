import React from 'react';
import logoUser from './iconUser.png'
import {MessageItemType} from "../../p1-main/m1-ui/u1-app/redux/reducer/DialogReducer";
const style = require('./Message.module.css');

function Message(props: MessageItemType) {
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
