import s from "./messages.module.css";
import Senders from "./senders";
import Msgs from "./msgs";

const Messages = (props) => {
  const MsgsData = props.MsgsData;
  const SendersData = props.SendersData;
  return (
    <div className={s.messages}>
      <h2 className={s.heading}>Messages</h2>
      <div className={s.container}>
        <Senders SendersData={SendersData} />
        <Msgs
          MsgsData={MsgsData}
          addMsgAC={props.addMsgAC}
          dispatch={props.dispatch}
          msgText={props.msgText}
          updMsgTextAc={props.updMsgTextAc}
        />
      </div>
    </div>
  );
};

export default Messages;
