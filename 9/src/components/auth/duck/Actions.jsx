import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_USER } from "./constants";

export const logInSucces = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const logInFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
export const logOutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: "logged out",
  };
};
