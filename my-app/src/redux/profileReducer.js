const ADD_POST = "ADD-POST";
const UPD_NEW_POST_TEXT = "UPD-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";

let initialState = {
  NewsData: [
    { text: "Hello, World", likes: 20, id: 1 },
    { text: "My first post", likes: 10, id: 2 },
    { text: "My second post", likes: 10, id: 3 },
  ],
  postText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const stateCopy = { ...state };
      stateCopy.NewsData = [...state.NewsData];
      const highestId = Math.max(...stateCopy.NewsData.map((post) => post.id));
      let newPost = {
        text: stateCopy.postText,
        likes: 0,
        id: highestId + 1,
      };
      if (newPost.text.length > 0) {
        stateCopy.NewsData.push(newPost);
        stateCopy.postText = "";
      } else {
        alert("Please write something :-)");
      }
      return stateCopy;
    }

    case UPD_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.postText = action.newText;
      return stateCopy;
    }

    case ADD_LIKE: {
      const stateCopy = { ...state };
      stateCopy.NewsData = stateCopy.NewsData.map((post) => ({ ...post })); // Create a shallow copy of the array
      let postId = action.id;
      let postIndex = stateCopy.NewsData.findIndex(
        (post) => post.id === postId
      ); // Use findIndex to get the index of the post
      let postToLike = stateCopy.NewsData[postIndex];
      if (!postToLike.likeAdded) {
        postToLike.likes += 1;
        postToLike.likeAdded = true;
      } else {
        postToLike.likes -= 1;
        postToLike.likeAdded = false;
      }
      return stateCopy;
    }
    default:
      return state;
  }
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

export default profileReducer;
