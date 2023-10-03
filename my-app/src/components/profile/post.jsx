import React from "react";
import s from "./profile.module.css";

const Post = (props) => {
  let postData = React.createRef();
  let addPost = () => {
    props.dispatch(props.addPostAC());
  };
  let onPostChange = () => {
    let text = postData.current.value;
    let action = props.updNewPostTextAC(text);
    props.dispatch(action);
  };
  return (
    <div className={s.post}>
      <h2 className={s.post_heading}>My posts</h2>
      <input
        ref={postData}
        type="text"
        placeholder="what's new?"
        className={s.post_input}
        onChange={onPostChange}
        value={props.postText}
      />
      <div className={s.post_post}>
        <button
          onClick={addPost}
          type="button"
          className={`${s.post_btn} btn btn-success`}
        >
          {" "}
          Send
        </button>
      </div>
    </div>
  );
};

export default Post;
