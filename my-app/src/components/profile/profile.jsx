import s from "./profile.module.css";
import Post from "./post";
import News from "./news";
import Info from "./info";

const Profile = () => {
  return (
    <div className={s.profile}>
      <Info />
      <Post />
      <News text="Hello, World" like_count="20" />
      <News text="My first post" like_count="10" />
    </div>
  );
};

export default Profile;
