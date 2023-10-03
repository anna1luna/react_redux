import s from "./messages.module.css";
import Msg from "./msg";
import React from "react";

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
  let textData = React.createRef();
  let sendMsg = () => {
    props.dispatch(props.addMsgAC());
  };
  let updMsgText = () => {
    let text = textData.current.value;
    props.dispatch(props.updMsgTextAc(text));
  };
  return (
    <div>
      <div>{MsgsReady}</div>
      <div className={s.sending}>
        <input
          ref={textData}
          className={s.field}
          placeholder="Type something..."
          value={props.msgText}
          onChange={updMsgText}
        />
        <button onClick={sendMsg} className={`${s.button} btn btn-primary`}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Msgs;
