import React from "react";
import Msgs from "./msgs";
import { addMsgAC, updMsgTextAc } from "./../../../redux/messagesReducer";

const MsgsContainer = (props) => {
  const state = props.store.getState();
  const msgText = state.messages.msgText;
  const MsgsData = state.messages.MsgsData;
  let sendMsg = () => {
    props.store.dispatch(addMsgAC());
  };
  let updMsgText = (text) => {
    props.store.dispatch(updMsgTextAc(text));
  };
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      props.store.dispatch(addMsgAC());
    }
  };
  return (
    <Msgs
      MsgsData={MsgsData}
      msgText={msgText}
      handleEnterKeyPress={handleEnterKeyPress}
      updMsgText={updMsgText}
      sendMsg={sendMsg}
    />
  );
};

export default MsgsContainer;
