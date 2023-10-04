const ADD_MESSAGE = "ADD-MESSAGE";
const UPD_MSG_TEXT = "UPD-MSG-TEXT";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE: let newMsg = {
        name: "Me",
        text: state.msgText,
        id: 6,
      };
      if (newMsg.text.length > 0) {
        state.MsgsData.push(newMsg);
        state.msgText = "";
      } else {
        alert("Please write something :-)");
      }
      return state
    case UPD_MSG_TEXT:
      state.msgText = action.newMsg;
      return state
    default: return state
  }
}

export const addMsgAC = () => {
  return { type: ADD_MESSAGE };
};
export const updMsgTextAc = (text) => {
  return { type: UPD_MSG_TEXT, newMsg: text };
};

export default messagesReducer