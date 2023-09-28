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
  let send = () => {
    let text = textData.current.value;
    console.log(text);
  };
  return (
    <div>
      <div>{MsgsReady}</div>
      <div className={s.sending}>
        <textarea
          ref={textData}
          className={s.field}
          placeholder="Type something..."
        ></textarea>
        <button
          onClick={() => {
            send();
          }}
          className={`${s.button} btn btn-primary`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Msgs;
