import News from "./news";
import { addLikeAC } from "./../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    NewsData: state.profile.NewsData,
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
