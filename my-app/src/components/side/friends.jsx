import s from "./side.module.css";

const Friends = (props) => {
  return (
    <div className={s.friend}>
      <img
        className={s.avatar}
        src="https://static.vecteezy.com/system/resources/previews/006/828/456/non_2x/bright-smiley-face-emoji-expression-free-vector.jpg"
        alt="friend"
      />
      <p className={s.name}>{props.name}</p>
    </div>
  );
};

export default Friends;
