import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "./../../redux/usersReducer";
import Users from "./users";

const mapStateToProps = (state) => {
  return {
    UsersData: state.users.UsersData,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
