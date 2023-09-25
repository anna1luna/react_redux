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
  ];
  return (
    <div className={s.msgs}>
      <Msg
        name={MsgsData[0].name}
        text={MsgsData[0].text}
        id={MsgsData[0].id}
      />
      <Msg
        name={MsgsData[1].name}
        text={MsgsData[1].text}
        id={MsgsData[1].id}
      />
      <Msg
        name={MsgsData[2].name}
        text={MsgsData[2].text}
        id={MsgsData[2].id}
      />
      <Msg
        name={MsgsData[3].name}
        text={MsgsData[3].text}
        id={MsgsData[3].id}
      />
    </div>
  );
};

export default Msgs;
