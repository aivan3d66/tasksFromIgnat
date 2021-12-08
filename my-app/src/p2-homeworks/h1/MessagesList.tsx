import React from 'react';
import Message from "./Message";
const style = require('./Message.module.css');

function MessageList(props: any) {

  const state = props.dialogPage.messages;
  const newMessageBody = state.newMessageText;

  const onSendMessageClick = () => {
    props.sendMessageCreator();
  }
  const onNewMessageChange = (e: any) => {
    const body = e.target.value;
    props.updateNewMessageTextCreator(body);
  }

  const messagesItems = state.map((m: any) => <Message avatar={m.avatar}
                                                                name={m.name}
                                                                message={m.message}
                                                                time={m.time}/>);
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
