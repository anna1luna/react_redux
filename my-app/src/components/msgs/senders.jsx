import s from "./messages.module.css";
import Sender from "./sender";

const Senders = () => {
  return (
    <div className={s.senders}>
      <ul>
        <Sender name="Anna" />
        <Sender name="Mama" />
        <Sender name="Papa" />
        <Sender name="Anton" />
        <Sender name="Anna KL" />
        <Sender name="Aika" />
        <Sender name="Yara" />
        <Sender name="Stas" />
        <Sender name="Lyuda" />
        <Sender name="Nastya" />
      </ul>
    </div>
  );
};

export default Senders;
