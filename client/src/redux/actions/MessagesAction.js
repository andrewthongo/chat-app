import {
  GET_MESSAGES_API,
  SEND_MESSAGES_API,
} from "../constant/ProjectConstant";

export const sendMessagesAction = (data) => {
  return {
    type: SEND_MESSAGES_API,
    data,
  };
};

export const getMessagesAction = (data) => {
  return {
    type: GET_MESSAGES_API,
    data,
  };
};
