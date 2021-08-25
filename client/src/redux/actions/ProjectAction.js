export const loginAction = (data) => {
  return {
    type: "LOGIN_API",
    data,
  };
};

export const registerAction = (data) => {
  return {
    type: "REGISTER_API",
    data,
  };
};
