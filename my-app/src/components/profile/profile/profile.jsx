import s from "./../profile.module.css";
import PostContainer from "../post/postContainer";
import Info from "../info";
import NewsContainer from "../news/newsContainer";

const Profile = (props) => {
  let NewsReady = props.NewsData.map((news) => (
    <NewsContainer
      key={news.id}
      text={news.text}
      like_count={news.likes}
      id={news.id}
    />
  ));
  return (
    <div className={s.profile}>
      <Info />
      <PostContainer />
      {NewsReady}
    </div>
  );
};

export default Profile;
