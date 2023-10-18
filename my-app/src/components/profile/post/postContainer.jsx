import Post from "./post";
import { addPostAC, updNewPostTextAC } from "./../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postText: state.profile.postText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updNewPostTextAC(text));
    },
    handleEnterKeyPress: (e) => {
      if (e.key === "Enter") {
        dispatch(addPostAC());
      }
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostContainer;
