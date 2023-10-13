import React from "react";
import Post from "./post";
import { addPostAC, updNewPostTextAC } from "./../../../redux/profileReducer";
import storeContext from "../../../storeContext";

const PostContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostAC());
        };

        let onPostChange = (text) => {
          let action = updNewPostTextAC(text);
          store.dispatch(action);
        };

        const handleEnterKeyPress = (e) => {
          if (e.key === "Enter") {
            store.dispatch(addPostAC());
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
      }}
    </storeContext.Consumer>
  );
};

export default PostContainer;
