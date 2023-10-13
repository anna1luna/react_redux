import s from "./../messages.module.css";

const Senders = (props) => {
  return <div className={s.senders}>{props.SendersReady}</div>;
};

export default Senders;
