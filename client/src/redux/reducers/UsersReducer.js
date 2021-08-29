const initialState = {
  peopleList: [],
  ownerInfo: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, peopleList: action.data };
    case "GET_OWNER_INFO":
      return { ...state, ownerInfo: action.data.user };
    default:
      return { ...state };
  }
};
