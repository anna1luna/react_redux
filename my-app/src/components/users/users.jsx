import s from "./users.module.css";
import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.UsersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        })
        .catch((error) => {
          console.error("Axios Error:", error.message);
        });
    }
  }

  follow = (userId) => {
    this.props.follow(userId);
  };
  unfollow = (userId) => {
    this.props.unfollow(userId);
  };

  render() {
    const usersReady = this.props.UsersData.map((user) => (
      <div className={s.userContainer}>
        <div className={s.avatarContainer}>
          <img
            className={s.avatar}
            src={
              user.photos.large ??
              "https://images.pond5.com/4k-empty-avatar-spinning-icon-072475125_prevstill.jpeg"
            }
            alt={`${user.name} avatar`}
          />
          <button
            className={`${s.btn} btn btn-primary`}
            onClick={
              user.followed
                ? () => this.unfollow(user.id)
                : () => this.follow(user.id)
            }
          >
            {user.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
        <div className={s.dataContainer} key={user.id}>
          <p className={s.data}> {user.name}</p>
          <p className={s.data}> {"user.location.city"},</p>
          <p className={s.data}>
            {" "}
            {user.status ?? "There could have been a status"}
          </p>
          <p className={s.data}> {"user.location.country"}</p>
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
  }
}

export default Users;
