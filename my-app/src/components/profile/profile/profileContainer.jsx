import storeContext from "../../../storeContext";
import NewsContainer from "../news/newsContainer";
import Profile from "./profile";

const ProfileContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();
        const NewsData = state.profile.NewsData;
        let NewsReady = NewsData.map((news) => (
          <NewsContainer
            key={news.id}
            text={news.text}
            like_count={news.likes}
            id={news.id}
          />
        ));
        return <Profile NewsReady={NewsReady} />;
      }}
    </storeContext.Consumer>
  );
};

export default ProfileContainer;
