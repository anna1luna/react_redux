import s from "./side.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./friends";

const Side = (props) => {
  const SideData = props.SideData;
  let SideReady = SideData.map((friends) => <Friends name={friends.name} />);
  return (
    <nav className={`${s.side} bg-info-subtle`}>
      <ul className={s.ul}>
        <li className={s.item}>
          {" "}
          <NavLink
            id="sidebar"
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
            to="/profile"
          >
            Profile
          </NavLink>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <NavLink
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
            to="/messages"
          >
            Messages
          </NavLink>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <NavLink
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
            to="/news"
          >
            News
          </NavLink>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <NavLink
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
            to="/music"
          >
            Music
          </NavLink>{" "}
        </li>
        <br></br>
        <li className={s.item}>
          {" "}
          <NavLink
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "black",
              };
            }}
            to="/settings"
          >
            Settings
          </NavLink>{" "}
        </li>
        <br></br>
        <br></br>
        <li className={s.item}>
          <p>Friends</p>
          <div className={s.container}>{SideReady}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Side;
