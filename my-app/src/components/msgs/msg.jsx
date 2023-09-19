import s from "./messages.module.css";

const Msg = (props) => {
  return (
    <div className={s.msg}>
      <div className={s.persona}>
        <img
          className={s.avatar}
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt="avatar"
        />
        <p className={s.name}>{props.name}</p>
      </div>
      <span className={s.text}> {props.text}</span>
    </div>
  );
};

export default Msg;
