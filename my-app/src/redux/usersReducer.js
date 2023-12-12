const SHOW_MORE = "SHOW-MORE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  UsersData: [
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
  ],
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
