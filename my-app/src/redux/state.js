const ADD_POST = "ADD-POST";
const UPD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPD_MSG_TEXT = "UPD-MSG-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        text: this._state.profile.postText,
        likes: 0,
        id: 4,
      };
      if (newPost.text.length > 0) {
        this._state.profile.NewsData.push(newPost);
        this._state.profile.postText = "";
        this._callSubscriber(this._state);
      } else {
        alert("Please write something :-)");
      }
    } else if (action.type === UPD_NEW_POST_TEXT) {
      this._state.profile.postText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_LIKE) {
      let postId = action.id;
      let postToLike = this._state.profile.NewsData.find(
        (post) => post.id === postId
      );
      if (postToLike && !postToLike.likeAdded) {
        postToLike.likes += 1;
        postToLike.likeAdded = true;
        this._callSubscriber(this._state);
      }
    } else if (action.type === ADD_MESSAGE) {
      let newMsg = {
        name: "Me",
        text: this._state.messages.msgText,
        id: 6,
      };
      if (newMsg.text.length > 0) {
        this._state.messages.MsgsData.push(newMsg);
        this._state.messages.msgText = "";
        this._callSubscriber(this._state);
      } else {
        alert("Please write something :-)");
      }
    } else if (action.type === UPD_MSG_TEXT) {
      this._state.messages.msgText = action.newMsg;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostAC = () => {
  return { type: ADD_POST };
};
export const updNewPostTextAC = (text) => {
  return { type: UPD_NEW_POST_TEXT, newText: text };
};
export const addLikeAC = (currentId) => {
  return { type: ADD_LIKE, id: currentId };
};
export const addMsgAC = () => {
  return { type: ADD_MESSAGE };
};
export const updMsgTextAc = (text) => {
  return { type: UPD_MSG_TEXT, newMsg: text };
};

export default store;

window.store = store;
