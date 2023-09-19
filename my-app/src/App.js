import "./App.css";
import Header from "./components/header/header";
import Side from "./components/side/side";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Side />
        <Profile />
      </div>
    </div>
  );
};

export default App;
