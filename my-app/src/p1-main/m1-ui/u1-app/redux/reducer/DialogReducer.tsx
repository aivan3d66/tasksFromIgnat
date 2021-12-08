const SEND_MESSAGE: string = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT: string = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}
export const updateNewMessageTextCreator = (body: any) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body,
  }
}

const initialState = {
  messages: [
    {id: 1, name: 'MrEpickMann', message: "Халоу", time: '22:00', avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'},
  ],
  newMessageText: '',
}

export const dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {
          id: state.messages.length + 1,
          name: "user",
          message: body,
          time: '22:00',
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

// const messageData: any = {
//   avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//   name: 'MrEpickMann',
//   message: 'It was said that Eleanor Weaver could take an old tree stump and make it taste like sweet rabbit stew.',
//   time: '22:00',
// }
