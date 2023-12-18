const SHOW_MORE = "SHOW-MORE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  UsersData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE:
    case FOLLOW:
      return {
        ...state,
        UsersData: state.UsersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        UsersData: state.UsersData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: false,
            };
          } else {
            return u;
          }
        }),
      };

    case SET_USERS: {
      return { ...state, UsersData: [...state.UsersData, ...action.users] };
    }
    default:
      return state;
  }
};

export const showMoreAC = () => {
  return { type: SHOW_MORE };
};
export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export const unfollowAC = (id) => {
  return { type: UNFOLLOW, id };
};

export default userReducer;
