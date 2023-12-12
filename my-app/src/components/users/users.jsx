import s from "./users.module.css";
import React from "react";

let Users = (props) => {
  let follow = (userId) => {
    props.follow(userId);
  };
  let unfollow = (userId) => {
    props.unfollow(userId);
  };

  const usersReady = props.UsersData.map((user) => (
    <div className={s.userContainer}>
      <div className={s.avatarContainer}>
        <img className={s.avatar} src={user.url} alt="avatar" />
        <button
          className={`${s.btn} btn btn-primary`}
          onClick={
            user.followed ? () => unfollow(user.id) : () => follow(user.id)
          }
        >
          {user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={s.dataContainer} key={user.id}>
        <p className={s.data}> {user.name}</p>
        <p className={s.data}> {user.location.city},</p>
        <p className={s.data}> {user.status}</p>
        <p className={s.data}> {user.location.country}</p>
      </div>
    </div>
  ));
  return (
    <div className={s.users}>
      <h2 className={s.heading}>Users</h2>
      <div className={s.container}>
        <div className={s.readyContainer}>{usersReady}</div>
      </div>
    </div>
  );
};

export default Users;
