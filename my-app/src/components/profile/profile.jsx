import s from "./profile.module.css";
import Post from "./post";
import News from "./news";
import Info from "./info";

const Profile = () => {
  let NewsData = [
    { text: "Hello, World", likes: 20, id: 1 },
    { text: "My first post", likes: 10, id: 2 },
  ];

  let NewsReady = NewsData.map((news) => (
    <News text={news.text} like_count={news.likes} id={news.id} />
  ));
  return (
    <div className={s.profile}>
      <Info />
      <Post />
      {NewsReady}
    </div>
  );
};

export default Profile;
