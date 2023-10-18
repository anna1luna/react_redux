import s from "./../side.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../friends";

const Side = (props) => {
  let SideReady = props.SideData.map((friends) => (
    <Friends name={friends.name} />
  ));
  return (
    <nav className={`${s.side}`}>
      <div className={s.logo}>
        <img
          src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A="
          alt="avatar"
          className={s.avatar_profile}
        />

        <p className={s.name_profile}>Dmitriy K</p>
      </div>
      <hr />
      <p className={s.menu}>Menu</p>
      <ul className={s.ul}>
        <li className={s.item}>
          {" "}
          <NavLink
            id="sidebar"
            className={s.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "white" : "rgb(111, 127, 146)",
              };
            }}
            to="/profile"
          >
            <img
              src="https://www.svgrepo.com/show/512690/profile-1335.svg"
              alt="profile"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
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
                color: isPending ? "red" : "rgb(111, 127, 146)",
              };
            }}
            to="/messages"
          >
            <img
              src="https://www.svgrepo.com/show/533232/message-circle.svg"
              alt="messages"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
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
                color: isPending ? "red" : "rgb(111, 127, 146)",
              };
            }}
            to="/news"
          >
            <img
              src="https://www.svgrepo.com/show/512547/news-grid-1537.svg"
              alt="news"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
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
                color: isPending ? "red" : "rgb(111, 127, 146)",
              };
            }}
            to="/music"
          >
            <img
              src="https://www.svgrepo.com/show/532708/music.svg"
              alt="music"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
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
                color: isPending ? "" : "rgb(111, 127, 146)",
              };
            }}
            to="/settings"
          >
            <img
              src="https://www.svgrepo.com/show/522270/settings.svg"
              alt="settings"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
            Settings
          </NavLink>{" "}
        </li>

        <br></br>
        <hr />
        <li className={s.item}>
          <p className={s.friends}>
            {" "}
            <img
              src="https://www.svgrepo.com/show/509977/group.svg"
              alt="Friends Icon"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />
            Friends
          </p>
          <div className={s.container}>{SideReady}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Side;
