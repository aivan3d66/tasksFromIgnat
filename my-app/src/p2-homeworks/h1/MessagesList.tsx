import React from 'react';
import Message from "./Message";
import {MessageItemType} from "../../p1-main/m1-ui/u1-app/redux/reducer/DialogReducer";

const style = require('./Message.module.css');

type DialogPage = {
  messages: Array<MessageItemType>,
  newMessageText: string,
}

type MessageListProps = {
  dialogPage: DialogPage,
  sendMessageCreator: () => void,
  updateNewMessageTextCreator: (body: string) => void,
}

function MessageList(props: MessageListProps) {

  const state = props.dialogPage.messages;
  const newMessageBody = props.dialogPage.newMessageText;

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
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>

    </div>

  )
}

export default MessageList;
