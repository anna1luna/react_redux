import s from "./messages.module.css";
import Senders from "./senders";
import Msgs from "./msgs";

const Messages = (props) => {
  return (
    <div>
      <h2 className={s.heading}>Messages</h2>
      <div className={s.container}>
        <Senders />
        <Msgs />
      </div>
    </div>
  );
};

export default Messages;
