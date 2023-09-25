import s from "./messages.module.css";
import Msg from "./msg";

const Msgs = () => {
  let MsgsData = [
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 1,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 2,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 3,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 4,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 5,
    },
  ];
  let MsgsReady = MsgsData.map((msg) => (
    <Msg name={msg.name} text={msg.text} id={msg.id} />
  ));
  return <div className={s.msgs}>{MsgsReady}</div>;
};

export default Msgs;
