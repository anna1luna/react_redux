import s from "./messages.module.css";
import MsgsContainer from "./msgs/msgsContainer";
import SendersContainer from "./sender/sendersContainer";

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <h2 className={s.heading}>Messages</h2>
      <div className={s.container}>
        <SendersContainer />
        <MsgsContainer />
      </div>
    </div>
  );
};

export default Messages;
