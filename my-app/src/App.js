import "./App.css";
import Header from "./components/header/header";
import Side from "./components/side/side";
import Profile from "./components/profile/profile";
import Messages from "./components/msgs/messages";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = (props) => {
  const NewsData = props.NewsData
  const MsgsData = props.MsgsData
  const SendersData = props.SendersData
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="body">
          <Side />
          <Routes>
            <Route path="/" element={<Profile NewsData={NewsData}/>} />
            <Route path="/profile" element={<Profile NewsData={NewsData}/>} />
            <Route path="/messages/*" element={<Messages MsgsData={MsgsData} SendersData={SendersData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
