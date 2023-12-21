import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCPAC,
  prevAC,
  nextAC,
  setTotalUsersCountAC,
} from "./../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./users";

class UsersContainerComponent extends React.Component {
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
    ) {
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
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        UsersData={this.props.UsersData}
        currentPage={this.props.currentPage}
        follow={this.follow}
        unfollow={this.unfollow}
        onPageChanged={this.onPageChanged}
        prev={this.prev}
        next={this.next}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    UsersData: state.users.UsersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCP: (pageNumber) => {
      dispatch(setCPAC(pageNumber));
    },
    prev: (pageNumber) => {
      dispatch(prevAC(pageNumber));
    },
    next: (pageNumber) => {
      dispatch(nextAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainerComponent);

export default UsersContainer;
