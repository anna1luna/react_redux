import { connect } from "react-redux";
import { addMsgAC, updMsgTextAc } from "./../../../redux/messagesReducer";
import Msgs from "./msgs";

const mapStateToProps = (state) => {
  return {
    msgText: state.messages.msgText,
    MsgsData: state.messages.MsgsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEnterKeyPress: (e) => {
      if (e.key === "Enter") {
        dispatch(addMsgAC());
      }
    },
    updMsgText: (text) => {
      dispatch(updMsgTextAc(text));
    },
    sendMsg: () => {
      dispatch(addMsgAC());
    },
  };
};

const MsgsContainer = connect(mapStateToProps, mapDispatchToProps)(Msgs);

export default MsgsContainer;
