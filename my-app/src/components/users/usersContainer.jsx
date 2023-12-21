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
import Users from "./users";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
