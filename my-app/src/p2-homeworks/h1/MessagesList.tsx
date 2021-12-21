import React from 'react';
import Message from "./Message";
import {MessageItemType} from "../../p1-main/m1-ui/u1-app/redux/reducer/DialogReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const style = require('./Message.module.css');

type DialogPage = {
  messages: Array<MessageItemType>,
  newMessageText: string,
}
type MessageListProps = {
  messagePage: DialogPage,
  sendMessageCreator: () => void,
  updateNewMessageTextCreator: (body: string) => void,
}

function MessageList(props: MessageListProps) {
  const state = props.messagePage.messages;
  const newMessageBody = props.messagePage.newMessageText;

  const onSendMessageClick = () => {
    props.sendMessageCreator();
  }

  const onNewMessageChange = (e: any) => {
    const body = e.target.value;
    props.updateNewMessageTextCreator(body);
  }

  const messagesItems = state.map((m: MessageItemType, index: number) => <Message avatar={m.avatar}
                                                                                  name={m.name}
                                                                                  message={m.message}
                                                                                  key={index}
                                                                                  time={m.time}
                                                                                  id={m.id}/>);
  return (
    <div>
      <div>
        {messagesItems}
      </div>
      <div className={style.messageInput}>
        <div className={style.inputField}>
          <textarea placeholder="Write something"
                    value={newMessageBody}
                    onChange={onNewMessageChange}/>
        </div>
        <div className={style.inputBtn}>
          <SuperButton onClick={onSendMessageClick}>
            Send message
          </SuperButton>
        </div>
      </div>
    </div>

  )
}

export default MessageList;
