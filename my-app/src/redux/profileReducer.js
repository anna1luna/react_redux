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
    }

const profileReducer = (state =initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        text: state.postText,
        likes: 0,
        id: 4,
      };
      if (newPost.text.length > 0) {
        state.NewsData.push(newPost);
        state.postText = "";
      } else {
        alert("Please write something :-)");
      }
      return state;
    case UPD_NEW_POST_TEXT:
      state.postText = action.newText;
      return state
    case ADD_LIKE:
      let postId = action.id;
      let postToLike = state.NewsData.find(
        (post) => post.id === postId
      );
      if (postToLike && !postToLike.likeAdded) {
        postToLike.likes += 1;
        postToLike.likeAdded = true;
      } else {
        postToLike.likes -= 1;
        postToLike.likeAdded = false;

      }
      return state
    default:
      return state;
  }
}

export const addPostAC = () => {
  return { type: ADD_POST };
};
export const updNewPostTextAC = (text) => {
  return { type: UPD_NEW_POST_TEXT, newText: text };
};
export const addLikeAC = (currentId) => {
  return { type: ADD_LIKE, id: currentId };
};

export default profileReducer