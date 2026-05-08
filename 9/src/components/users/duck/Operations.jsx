import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFail,
  deleteUsersRequest,
  deleteUsersFail,
  deleteUsersSuccess,
} from "./Actions";
import { getUsers, deleteUsers } from "./../../../api/usersApi";
export const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    return getUsers(requestParams)
      .then((result) => {
        dispatch(fetchUsersSuccess(result));
        return result;
      })
      .catch((err) => dispatch(fetchUsersFail(err)));
  };
};

export const removeUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(deleteUsersRequest(requestParams));
    return deleteUsers(requestParams)
      .then((result) => {
        dispatch(deleteUsersSuccess(result));
      })
      .catch((err) => {
        dispatch(deleteUsersFail(err));
        return err;
      });
  };
};
