import s from "./messages.module.css";
import Msg from "./msg";

const Msgs = () => {
  return (
    <div className={s.msgs}>
      <Msg
        name="Mama"
        text="I am a normal popover and I can have text and everything"
      />
      <Msg
        name="Me"
        text="I am a normal popover and I can have text and everything"
      />
      <Msg
        name="Mama"
        text="I am a normal popover and I can have text and everything"
      />
      <Msg
        name="Me"
        text="I am a normal popover and I can have text and everything"
      />
    </div>
  );
};

export default Msgs;
