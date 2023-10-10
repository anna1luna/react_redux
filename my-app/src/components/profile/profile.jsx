import s from "./profile.module.css";
import PostContainer from "./post/postContainer";
import NewsContainer from "./news/newsContainer";
import Info from "./info";

const Profile = (props) => {
  let state = props.store.getState();
  const NewsData = state.profile.NewsData;
  let NewsReady = NewsData.map((news) => (
    <NewsContainer
      key={news.id}
      text={news.text}
      like_count={news.likes}
      id={news.id}
      store={props.store}
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
