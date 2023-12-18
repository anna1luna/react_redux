import s from "./users.module.css";
import React from "react";

let Users = (props) => {
  if (props.UsersData.length === 0) {
    props.setUsers([
      {
        url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
        name: "Dmitry K",
        status:
          "I am bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
        id: 1,
        location: { city: "Minsk", country: "Belarus" },
        followed: true,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Svetlana D",
        status: "I am bla bla",
        id: 2,
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Dmitry O",
        status: "I am bla bla",
        id: 3,
        location: { city: "Moscow", country: "Russia" },
        followed: true,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Ivan I",
        status: "I am bla bla",
        id: 4,
        location: { city: "Krasnodar", country: "Russia" },
        followed: false,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Dmitry K",
        status: "I am bla bla ",
        id: 5,
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Dmitry K",
        status: "I am bla bla ",
        id: 6,
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Dmitry K",
        status: "I am bla bla ",
        id: 7,
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
      {
        url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
        name: "Dmitry K",
        status: "I am bla bla ",
        id: 8,
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
    ]);
  }
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
