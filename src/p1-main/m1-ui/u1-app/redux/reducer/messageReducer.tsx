const SEND_MESSAGE: string = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT: string = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}
export const updateNewMessageTextCreator = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body,
  }
}

export type MessageItemType = {
  id: number,
  name: string,
  message: string,
  time: string,
  avatar: string,
}
export type MessagesType = {
  messages: Array<MessageItemType>,
  newMessageText: string,
  messageTime: string
}

const data = new Date();
const getCurrentTime = `${data.getHours()}:${data.getMinutes()}`;

const initialState: MessagesType = {
  messages: [
    {
      id: 1,
      name: "Паштет",
      message: "Иди своей дорогой, сталкер!",
      time: '22:00',
      avatar: 'https://gamebomb.ru/files/galleries/001/4/4c/354764.jpg'
    },
  ],
  newMessageText: '',
  messageTime: getCurrentTime,
}

export const messagesReducer = (state: MessagesType = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageText;
      let curTime = state.messageTime;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {
          id: state.messages.length + 1,
          name: "Anonymous",
          message: body,
          time: curTime,
          avatar: null,
        }],
      };
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.body,
      };
    }

    default:
      return state;
  }
}
