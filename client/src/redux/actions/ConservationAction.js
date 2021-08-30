import {
  ADD_CONVERSATION_API,
  GET_CONVERSATION_API,
  SET_CONVERSATION_ID,
  SET_NAME,
} from "../constant/ProjectConstant";

export const getConversationAction = (data) => {
  return {
    type: GET_CONVERSATION_API,
    data,
  };
};

export const setConversationIdAction = (data) => {
  return {
    type: SET_CONVERSATION_ID,
    data,
  };
};

export const addConversationAction = (data) => {
  return {
    type: ADD_CONVERSATION_API,
    data,
  };
};

export const setNameAction = (data) => {
  return {
    type: SET_NAME,
    data,
  };
};
