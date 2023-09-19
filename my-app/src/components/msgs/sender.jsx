import s from "./messages.module.css";

const Sender = (props) => {
  return <li className={`${s.sender}`}>{props.name}</li>;
};

export default Sender;
