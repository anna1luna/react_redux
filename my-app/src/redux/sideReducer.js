let initialState = {
  SideData: [{ name: "Anton" }, { name: "Mama" }, { name: "Anna" }],
};

const sideReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  stateCopy.SideData = [...state.SideData];
  return stateCopy;
};

export default sideReducer;
