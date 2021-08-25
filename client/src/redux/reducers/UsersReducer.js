const initialState = {
  peopleList: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, peopleList: action.data };
    default:
      return { ...state };
  }
};
