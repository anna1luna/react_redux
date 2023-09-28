import React from "react";
import s from "./profile.module.css";

const Post = () => {
  let postData = React.createRef();
  let addPost = () => {
    let post = postData.current.value;
    alert(post);
  };
  return (
    <div className={s.post}>
      <h2 className={s.post_heading}>My posts</h2>
      <textarea
        ref={postData}
        type="text"
        placeholder="  what's new?"
        className={s.post_input}
      ></textarea>
      <div className={s.post_post}>
        <button
          onClick={() => {
            addPost();
          }}
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
