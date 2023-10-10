import s from "./profile.module.css";
import PostContainer from "./post/postContainer";
import News from "./news";
import Info from "./info";

const Profile = (props) => {
  const NewsData = props.NewsData;
  let NewsReady = NewsData.map((news) => (
    <News
      key={news.id}
      text={news.text}
      like_count={news.likes}
      id={news.id}
      dispatch={props.dispatch}
      addLikeAC={props.addLikeAC}
    />
  ));
  return (
    <div className={s.profile}>
      <Info />
      <PostContainer store={props.store} />
      {NewsReady}
    </div>
  );
};

export default Profile;
