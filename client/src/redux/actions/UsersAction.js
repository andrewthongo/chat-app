import {
  GET_USERS_API,
  LOGIN_API,
  REGISTER_API,
} from "../constant/ProjectConstant";

export const loginAction = (data) => {
  return {
    type: LOGIN_API,
    data,
  };
};

export const registerAction = (data) => {
  return {
    type: REGISTER_API,
    data,
  };
};

export const getUsersAction = () => {
  return {
    type: GET_USERS_API,
  };
};
