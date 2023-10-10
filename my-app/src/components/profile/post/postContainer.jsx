import React from "react";
import Post from "./post";
import { addPostAC, updNewPostTextAC } from "./../../../redux/profileReducer";

const PostContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostAC());
  };
  let onPostChange = (text) => {
    let action = updNewPostTextAC(text);
    props.dispatch(action);
  };
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      props.dispatch(addPostAC());
    }
  };
  return (
    <Post
      onPostChange={onPostChange}
      handleEnterKeyPress={handleEnterKeyPress}
      addPost={addPost}
      postText={props.postText}
    />
  );
};

export default PostContainer;
