const initState = {
  users: [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      users: action,
    };
  }
  return state;
};

export default rootReducer;
