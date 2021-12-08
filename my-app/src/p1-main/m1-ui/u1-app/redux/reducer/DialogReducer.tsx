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
}

const initialState: MessagesType = {
  messages: [
    {
      id: 1,
      name: "MrEpickMann",
      message: "Халоу",
      time: '22:00',
      avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'
    },
  ],
  newMessageText: '',
}

export const dialogsReducer = (state: MessagesType = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {
          id: state.messages.length + 1,
          name: "Anonymous",
          message: body,
          time: "22:00",
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
