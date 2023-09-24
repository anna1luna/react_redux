import s from "./messages.module.css";
import { NavLink } from "react-router-dom";

const Sender = (props) => {
  var path = "/messages/" + props.id;
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
          to={path}
        >
          {props.name}
        </NavLink>
      </li>
    </ul>
  );
};

export default Sender;
