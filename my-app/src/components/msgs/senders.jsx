import s from "./messages.module.css";
import Sender from "./sender";

const Senders = () => {
  return (
    <div className={s.senders}>
      <Sender name="Anna" id="1" />
      <Sender name="Mama" id="2" />
      <Sender name="Papa" id="3" />
      <Sender name="Anton" id="4" />
      <Sender name="Anna KL" id="5" />
      <Sender name="Aika" id="6" />
      <Sender name="Yara" id="7" />
      <Sender name="Stas" id="8" />
      <Sender name="Lyuda" id="9" />
      <Sender name="Nastya" id="10" />
    </div>
  );
};

export default Senders;
