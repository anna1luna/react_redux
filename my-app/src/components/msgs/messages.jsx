import s from "./messages.module.css";
import Senders from "./senders";
import Msgs from "./msgs";

const Messages = (props) => {
  const MsgsData = props.MsgsData;
  const SendersData = props.SendersData;
  return (
    <div>
      <h2 className={s.heading}>Messages</h2>
      <div className={s.container}>
        <Senders SendersData={SendersData} />
        <Msgs MsgsData={MsgsData} />
      </div>
    </div>
  );
};

export default Messages;
