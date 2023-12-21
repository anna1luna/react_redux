const SHOW_MORE = "SHOW-MORE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CP = "SET-CP";
const PREV = "PREV";
const NEXT = "NEXT";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

let initialState = {
  UsersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
    case PREV:
      return {
        ...state,
        currentPage:
          state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
      };
    case NEXT:
      const pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
      return {
        ...state,
        currentPage:
          state.currentPage < pagesCount
            ? state.currentPage + 1
            : state.currentPage,
      };
    case SET_USERS: {
      return { ...state, UsersData: [...action.users] };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case SET_CP: {
      return { ...state, currentPage: action.currentPage };
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
export const setTotalUsersCountAC = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount };
};
export const unfollowAC = (id) => {
  return { type: UNFOLLOW, id };
};
export const setCPAC = (currentPage) => {
  return { type: SET_CP, currentPage: currentPage };
};
export const prevAC = (currentPage) => {
  return { type: PREV, currentPage: currentPage };
};
export const nextAC = (currentPage) => {
  return { type: NEXT, currentPage: currentPage };
};

export default userReducer;
