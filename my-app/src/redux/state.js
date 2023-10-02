let store = {
  _state: {
    profile: {
    NewsData: [
      { text: "Hello, World", likes: 20, id: 1 },
      { text: "My first post", likes: 10, id: 2 },
      { text: "My second post", likes: 10, id: 3 },
    ],
    postText: ''
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
    SideData:[
    { name: "Anton" },
    { name: "Mama"},
    { name: "Anna" }
  ]}
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('1');
  },
  getState() {
  return this._state;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
      text: this._state.profile.postText,
      likes: 0,
      id: 4    
    }
    this._state.profile.NewsData.push(newPost)
    this._state.profile.postText = ''
    this._callSubscriber(this._state)
    } else if (action.type === 'UPD-NEW-POST-TEXT') {
      this._state.profile.postText = action.newText
      this._callSubscriber(this._state)
    }
  }
}
export default store;

window.store = store
