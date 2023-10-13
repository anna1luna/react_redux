import React from "react";
import Msgs from "./msgs";
import { addMsgAC, updMsgTextAc } from "./../../../redux/messagesReducer";
import storeContext from "../../../storeContext";

const MsgsContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        const state = store.getState();
        const msgText = state.messages.msgText;
        const MsgsData = state.messages.MsgsData;
        let sendMsg = () => {
          store.dispatch(addMsgAC());
        };
        let updMsgText = (text) => {
          store.dispatch(updMsgTextAc(text));
        };
        const handleEnterKeyPress = (e) => {
          if (e.key === "Enter") {
            store.dispatch(addMsgAC());
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
      }}
    </storeContext.Consumer>
  );
};

export default MsgsContainer;
