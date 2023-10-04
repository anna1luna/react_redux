import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sideReducer from "./sideRecucer";

let store = {
  _state: {
    profile: {
      NewsData: [
        { text: "Hello, World", likes: 20, id: 1 },
        { text: "My first post", likes: 10, id: 2 },
        { text: "My second post", likes: 10, id: 3 },
      ],
      postText: "",
    },
    messages: {
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
    },
    side: {
      SideData: [{ name: "Anton" }, { name: "Mama" }, { name: "Anna" }],
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action)
    this._state.messages = messagesReducer(this._state.messages, action)
    this._state.side = sideReducer(this._state.side, action)
    this._callSubscriber(this._state);
  },
};




export default store;

window.store = store;
