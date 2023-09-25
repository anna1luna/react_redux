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
  return (
    <div className={s.senders}>
      <Sender name={SendersData[0].name} id={SendersData[0].id} />
      <Sender name={SendersData[1].name} id={SendersData[1].id} />
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
