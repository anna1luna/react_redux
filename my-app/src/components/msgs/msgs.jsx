import s from "./messages.module.css";
import Msg from "./msg";

const Msgs = (props) => {
  const MsgsData = props.MsgsData;
  let MsgsReady = MsgsData.map((msg) => (
    <Msg name={msg.name} text={msg.text} id={msg.id} />
  ));
  return <div className={s.msgs}>{MsgsReady}</div>;
};

export default Msgs;
