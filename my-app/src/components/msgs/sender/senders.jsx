import s from "./../messages.module.css";
import Sender from "../sender";

const Senders = (props) => {
  let SendersReady = props.SendersData.map((sender) => (
    <Sender name={sender.name} id={sender.id} key={sender.id} />
  ));
  return <div className={s.senders}>{SendersReady}</div>;
};

export default Senders;
