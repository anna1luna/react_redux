let initialState = {
  SideData: [{ name: "Anton" }, { name: "Mama" }, { name: "Anna" }],
};

const sideReducer = (state = initialState, action) => {
  return {
    ...state,
    ...state.SideData,
  };
};

export default sideReducer;
