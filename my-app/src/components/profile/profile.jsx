import s from "./profile.module.css";
import Post from "./post";
import News from "./news";
import Info from "./info";

const Profile = () => {
  let NewsData = [
    { text: "Hello, World", likes: 20, id: 1 },
    { text: "My first post", likes: 10, id: 2 },
  ];
  return (
    <div className={s.profile}>
      <Info />
      <Post />
      <News text={NewsData[0].text} like_count={NewsData[0].likes} />
      <News text={NewsData[1].text} like_count={NewsData[1].likes} />
    </div>
  );
};

export default Profile;
