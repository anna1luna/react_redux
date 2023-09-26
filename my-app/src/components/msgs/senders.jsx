import s from "./messages.module.css";
import Sender from "./sender";

const Senders = (props) => {
  const SendersData = props.SendersData;
  let SendersReady = SendersData.map((sender) => (
    <Sender name={sender.name} id={sender.id} />
  ));
  return <div className={s.senders}>{SendersReady}</div>;
};

export default Senders;
