const initialState = {
  token: "",
  user: {},
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      return { token: payload };

    case "SET_User":
      return { user: payload };

    case "LOGOUT_TOKEN":
      return { token: payload.token };
    case "LOGOUT_USER":
      return { user: payload.user };

    default:
      return state;
  }
};
export default login;

export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
export const setUser = (user) => {
  return {
    type: "SET_User",
    payload: user,
  };
};

export const setTokenOut = (token) => {
  return {
    type: "LOGOUT_TOKEN",
    payload: token,
  };
};
export const setUserOut = (user) => {
  return {
    type: "LOGOUT_USER",
    payload: user,
  };
};
