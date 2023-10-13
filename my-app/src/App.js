import "./App.css";
import Header from "./components/header/header";
import SideContainer from "./components/side/navbar/sideContainer";
import ProfileContainer from "./components/profile/profile/profileContainer";
import Messages from "./components/msgs/messages";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { Route, Routes } from "react-router-dom";
const App = (props) => {
  return (
    <div>
      <Header />
      <div className="body">
        <SideContainer />
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
