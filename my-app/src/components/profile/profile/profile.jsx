import s from "./../profile.module.css";
import PostContainer from "../post/postContainer";
import Info from "../info";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <Info />
      <PostContainer />
      {props.NewsReady}
    </div>
  );
};

export default Profile;
