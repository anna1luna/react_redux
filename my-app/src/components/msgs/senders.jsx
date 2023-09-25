import s from "./messages.module.css";
import Sender from "./sender";

const Senders = () => {
  let SendersData = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Mama" },
    { id: 3, name: "Papa" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Anna KL" },
    { id: 6, name: "Aika" },
    { id: 7, name: "Yara" },
    { id: 8, name: "Stas" },
    { id: 9, name: "Luyda" },
    { id: 10, name: "Nastya" },
  ];
  let SendersReady = SendersData.map((sender) => (
    <Sender name={sender.name} id={sender.id} />
  ));
  return <div className={s.senders}>{SendersReady}</div>;
};

export default Senders;
