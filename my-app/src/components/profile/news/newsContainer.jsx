import News from "./news";
import { addLikeAC } from "./../../../redux/profileReducer";
import storeContext from "../../../storeContext";

const NewsContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let addLikes = () => {
          let currentId = props.id;
          store.dispatch(addLikeAC(currentId));
        };
        return (
          <News
            text={props.text}
            like_count={props.like_count}
            addLikes={addLikes}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default NewsContainer;
