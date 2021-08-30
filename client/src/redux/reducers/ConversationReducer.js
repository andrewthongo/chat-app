import {
  GET_CONVERSATION,
  SET_CONVERSATION_ID,
  SET_NAME,
} from "../constant/ProjectConstant";

const initialState = {
  conversation: [],
  conversationInfo: null,
  conversationId: null,
};

export const ConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATION:
      return { ...state, conversation: action.data };
    case SET_NAME:
      return { ...state, conversationInfo: action.data };
    case SET_CONVERSATION_ID:
      return { ...state, conversationId: action.data };
    default:
      return { ...state };
  }
};
