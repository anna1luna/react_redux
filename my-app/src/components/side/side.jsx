import s from "./side.module.css";

const Side = () => {
  return (
    <nav className={`${s.side} bg-info-subtle`}>
      <ul className={s.ul}>
        <li className={s.item}>
          {" "}
          <a className={`${s.link} ${s.active}`} href="/profile">
            Profile
          </a>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <a className={s.link} href="/messages">
            Messages
          </a>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <a className={s.link} href="/news">
            News
          </a>{" "}
        </li>
        <li className={s.item}>
          {" "}
          <a className={s.link} href="/music">
            Music
          </a>{" "}
        </li>
        <br></br>
        <li className={s.item}>
          {" "}
          <a className={s.link} href="/settings">
            Settings
          </a>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Side;
