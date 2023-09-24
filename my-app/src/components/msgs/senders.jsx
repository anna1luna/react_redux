import s from "./messages.module.css";
import Sender from "./sender";

const Senders = () => {
  return (
    <div className={s.senders}>
      <Sender />
    </div>
  );
};

export default Senders;
