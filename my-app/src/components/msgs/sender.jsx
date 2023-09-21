import s from "./messages.module.css";
import { NavLink } from "react-router-dom";

const Sender = (props) => {
  return (
    <li className={`${s.sender}`}>
      <NavLink to="">{props.name}</NavLink>
    </li>
  );
};

export default Sender;
