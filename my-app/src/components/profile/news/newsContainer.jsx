import News from "./news";
import { addLikeAC } from "./../../../redux/profileReducer";

const NewsContainer = (props) => {
  let addLikes = () => {
    let currentId = props.id;
    props.store.dispatch(addLikeAC(currentId));
  };
  return (
    <News text={props.text} like_count={props.like_count} addLikes={addLikes} />
  );
};

export default NewsContainer;
