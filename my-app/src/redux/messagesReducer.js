const ADD_MESSAGE = "ADD-MESSAGE";
const UPD_MSG_TEXT = "UPD-MSG-TEXT";
let initialState = {
  MsgsData: [
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 1,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 2,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 3,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 4,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 5,
    },
  ],
  msgText: "",
  SendersData: [
    { id: 1, name: "Anna" },
    { id: 2, name: "Mama" },
    { id: 3, name: "Papa" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Anna KL" },
    { id: 6, name: "Aika" },
    { id: 7, name: "Yara" },
    { id: 8, name: "Stas" },
    { id: 9, name: "Luyda" },
    { id: 10, name: "Nastya" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMsg = {
        name: "Me",
        text: state.msgText,
        id: 6,
      };

      if (newMsg.text.length > 0) {
        return {
          ...state,
          MsgsData: [...state.MsgsData, newMsg],
          msgText: "",
        };
      } else {
        alert("Please write something :-)");
        return state; // Return the original state if the message is empty
      }
    }
    case UPD_MSG_TEXT:
      return {
        ...state,
        msgText: action.newMsg,
      };

    default:
      return state;
  }
};

export const addMsgAC = () => {
  return { type: ADD_MESSAGE };
};
export const updMsgTextAc = (text) => {
  return { type: UPD_MSG_TEXT, newMsg: text };
};

export default messagesReducer;
