import s from "./profile.module.css";
import Post from "./post";
import News from "./news";
import Info from "./info";

const Profile = (props) => {
  const NewsData = props.NewsData;
  let NewsReady = NewsData.map((news) => (
    <News text={news.text} like_count={news.likes} id={news.id} />
  ));
  return (
    <div className={s.profile}>
      <Info />
      <Post postText={props.postText} dispatch={props.dispatch} />
      {NewsReady}
    </div>
  );
};

export default Profile;
