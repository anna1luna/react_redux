import s from "./messages.module.css";
import Msg from "./msg";

const Msgs = (props) => {
  const MsgsData = props.MsgsData;

  let MsgsReady = MsgsData.map((msg) => (
    <div
      className={
        msg.name.includes("Me")
          ? `${s.msg} ${s.meClass}`
          : `${s.msg} ${s.otherClass}`
      }
      key={msg.id}
    >
      <Msg name={msg.name} text={msg.text} id={msg.id} />
    </div>
  ));

  return <div>{MsgsReady}</div>;
};

export default Msgs;
