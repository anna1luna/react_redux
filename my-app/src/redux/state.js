import { rerender } from "../render";
let state = {
  profile: {
    NewsData: [
      { text: "Hello, World", likes: 20, id: 1 },
      { text: "My first post", likes: 10, id: 2 },
      { text: "My second post", likes: 10, id: 3 },
    ],
    postText: 'bla bla bla'
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
};

export let addPost = () => {
  let newPost = {
    text: state.profile.postText,
    likes: 0,
    id: 4    
  }
  state.profile.NewsData.push(newPost)
  state.profile.postText = ''
  rerender(state)
}

export let updNewPostText = (newText) => {
  state.profile.postText = newText
  rerender(state)
}

export default state;
