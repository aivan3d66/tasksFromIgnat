import {
  MessagesType,
  sendMessageCreator,
  updateNewMessageTextCreator
} from "../../p1-main/m1-ui/u1-app/redux/reducer/DialogReducer";
import {connect} from "react-redux";
import MessageList from "./MessagesList";

type MapStateProps = {
  dialogPage: MessagesType,
}

const mapStateToProps = (state: MapStateProps) => {
  return {
    dialogPage: state.dialogPage,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewMessageTextCreator: (body: string) => {
      dispatch(updateNewMessageTextCreator(body));
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator());
    },
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessagesContainer;
