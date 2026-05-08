import { logInSucces, logInFailed, logOutUser } from "./actions";
import { LogInUser } from "../../../api/authApi";

export const logIntoApp = (requestParams) => {
  return (dispatch) => {
    return LogInUser(requestParams)
      .then((result) => {
        dispatch(logInSucces(result.data));
        return result.data;
      })
      .catch((err) => {
        dispatch(logInFailed("invalid credentials"));
        return err;
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(logOutUser());
  };
};
