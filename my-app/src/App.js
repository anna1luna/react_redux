import "./App.css";
import Header from "./components/header/header";
import Side from "./components/side/side";
import Profile from "./components/profile/profile";
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
          <Side SideData={props.appState.side.SideData} />
          <Routes>
          <Route path="/" element={<Profile store={props.store} />}/>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/messages/*" element={<Messages MsgsData={props.appState.messages.MsgsData} SendersData={props.appState.messages.SendersData} msgText={props.appState.messages.msgText} dispatch={props.dispatch} addMsgAC={props.addMsgAC} updMsgTextAc={props.updMsgTextAc} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
