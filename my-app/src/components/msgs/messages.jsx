import s from "./messages.module.css";
import Senders from "./senders";
import MsgsContainer from "./msgs/msgsContainer";

const Messages = (props) => {
  const SendersData = props.SendersData;
  return (
    <div className={s.messages}>
      <h2 className={s.heading}>Messages</h2>
      <div className={s.container}>
        <Senders SendersData={SendersData} />
        <MsgsContainer store={props.store} />
      </div>
    </div>
  );
};

export default Messages;
