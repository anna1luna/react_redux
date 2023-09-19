import s from "./profile.module.css";
import Post from "./post";
import News from "./news";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          className={s.info_bkgrd}
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
          alt="background"
        ></img>
      </div>
      <div className={s.info_data}>
        <div className={s.info_pic}>
          <img
            className={s.info_avatar}
            src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A="
            alt="avatar"
          ></img>
        </div>
        <div>
          <p className={`${s.info_heading} h2`}>Dmitry K</p>
          <br></br>
          <p className={s.info_info}>Date of Birth: 2 january</p>
          <p className={s.info_info}>City: Minsk </p>
          <p className={s.info_info}> Education: BSU '11 </p>
          <p className={s.info_info}>
            Web Site:{" "}
            <a href="https://it-kamasutra.com">https://it-kamasutra.com</a>
          </p>
        </div>
      </div>
      <Post />
      <News text="Hello, World" like_count="20" />
      <News text="My first post" like_count="10" />
    </div>
  );
};

export default Profile;
