const initialState = {
  messages: [],
};

export const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return { ...state, messages: action.data };
    default:
      return { ...state };
  }
};
