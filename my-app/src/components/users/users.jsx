import s from "./users.module.css";
import React from "react";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
      .catch((error) => {
        console.error("Axios Error:", error.message);
      });
  }
  follow = (userId) => {
    this.props.follow(userId);
  };
  unfollow = (userId) => {
    this.props.unfollow(userId);
  };
  onPageChanged = (pageNumber) => () => {
    this.props.setCP(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        console.error("Axios Error:", error.message);
      });
  };
  prev = () => () => {
    this.props.prev(this.props.currentPage - 1);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage - 1
        }&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        console.error("Axios Error:", error.message);
      });
  };
  next = () => () => {
    const nextPage = this.props.currentPage + 1;
    if (
      nextPage <= Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    );
    {
      this.props.next(nextPage);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
        })
        .catch((error) => {
          console.error("Axios Error:", error.message);
        });
    }
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    const startPage =
      this.props.currentPage <= halfMaxPagesToShow
        ? 1
        : Math.min(
            Math.max(this.props.currentPage - halfMaxPagesToShow, 1),
            pagesCount - maxPagesToShow + 1
          );

    const endPage = Math.min(startPage + maxPagesToShow - 1, pagesCount);

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
        <nav aria-label="Page navigation">
          <ul className={`pagination ${s.navigation}`}>
            <li className={`page-item`}>
              <a className={`page-link`} onClick={this.prev()} href="#">
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
                    this.props.currentPage === p ? s.selected : ""
                  } page-link`}
                  href="#"
                  onClick={this.onPageChanged(p)}
                >
                  {p}
                </a>
              </li>
            ))}

            <li className={`page-item`}>
              <a className={`page-link`} onClick={this.next()} href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Users;
