import "./App.css";
import Header from "./components/header/header";
import Side from "./components/side/side";
import Profile from "./components/profile/profile";
import Messages from './components/msgs/messages'

const App = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Side />
        {/* <Profile /> */}
        <Messages />
      </div>
    </div>
  );
};

export default App;
