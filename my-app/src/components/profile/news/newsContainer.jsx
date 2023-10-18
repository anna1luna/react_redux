import News from "./news";
import { addLikeAC } from "./../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    text: state.profile.NewsData.text,
    like_count: state.profile.NewsData.likes,
    id: state.profile.NewsData.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLikes: (id) => {
      dispatch(addLikeAC(id));
    },
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
