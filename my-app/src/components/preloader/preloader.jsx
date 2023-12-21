import preloader from "../../assets/images/preloader.svg";
import s from "../preloader/preloader.module.css";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="preloader" className={s.loader} />
    </div>
  );
};

export default Preloader;
