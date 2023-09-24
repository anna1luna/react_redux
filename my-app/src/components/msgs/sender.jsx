import s from "./messages.module.css";
import { NavLink } from "react-router-dom";

const Sender = (props) => {
  return (
    <ul>
      <li className={`${s.sender}`}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/1"
        >
          Anna
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/2"
        >
          Mama
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/3"
        >
          Papa
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/4"
        >
          Anton
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/5"
        >
          Anna KL
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        {" "}
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/6"
        >
          Aika
        </NavLink>
      </li>
      <li className={`${s.sender}`}>
        {" "}
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#8190A5",
            };
          }}
          to="/messages/7"
        >
          Luyda
        </NavLink>
      </li>
    </ul>
  );
};

export default Sender;
