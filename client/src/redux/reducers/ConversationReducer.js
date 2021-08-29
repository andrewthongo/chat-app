const initialState = {
  conversation: [],
  conversationName: null,
  conversationId: null,
};

export const ConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONVERSATION":
      return { ...state, conversation: action.data };
    case "SET_NAME":
      return { ...state, conversationName: action.data };
    case "SET_CONVERSATION_ID":
      return { ...state, conversationId: action.data };
    default:
      return { ...state };
  }
};
