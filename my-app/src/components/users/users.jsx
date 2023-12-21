import s from "./users.module.css";
import React from "react";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const maxPagesToShow = 5;
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

  const startPage =
    props.currentPage <= halfMaxPagesToShow
      ? 1
      : Math.min(
          Math.max(props.currentPage - halfMaxPagesToShow, 1),
          pagesCount - maxPagesToShow + 1
        );

  const endPage = Math.min(startPage + maxPagesToShow - 1, pagesCount);

  const usersReady = props.UsersData.map((user) => (
    <div className={s.userContainer} key={user.id}>
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
          onClick={() =>
            user.followed ? props.unfollow(user.id) : props.follow(user.id)
          }
        >
          {user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={s.dataContainer}>
        <p className={s.data}>{user.name}</p>
        <p className={s.data}>{"user.location.city"},</p>
        <p className={s.data}>
          {user.status ?? "There could have been a status"}
        </p>
        <p className={s.data}>{"user.location.country"}</p>
      </div>
    </div>
  ));

  return (
    <div className={s.users}>
      <h2 className={s.heading}>Users</h2>

      <div className={s.container}>
        <div className={s.readyContainer}>{usersReady}</div>
      </div>
      <nav aria-label="Page navigation">
        <ul className={`pagination ${s.navigation}`}>
          <li className={`page-item`}>
            <a className={`page-link`} onClick={props.prev()} href="#">
              Previous
            </a>
          </li>
          {Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
          ).map((p) => (
            <li key={p} className={`page-item`}>
              <a
                className={`${
                  props.currentPage === p ? s.selected : ""
                } page-link`}
                href="#"
                onClick={props.onPageChanged(p)}
              >
                {p}
              </a>
            </li>
          ))}

          <li className={`page-item`}>
            <a className={`page-link`} onClick={props.next()} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;
