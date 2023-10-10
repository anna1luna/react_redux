import React from "react";
import Post from "./post";
import { addPostAC, updNewPostTextAC } from "./../../../redux/profileReducer";

const PostContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostAC());
  };
  let onPostChange = (text) => {
    let action = updNewPostTextAC(text);
    props.store.dispatch(action);
  };
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      props.store.dispatch(addPostAC());
    }
  };
  return (
    <Post
      onPostChange={onPostChange}
      handleEnterKeyPress={handleEnterKeyPress}
      addPost={addPost}
      postText={state.profile.postText}
    />
  );
};

export default PostContainer;
