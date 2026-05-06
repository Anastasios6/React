import {
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
} from "../constants/UsersConstants";

import axios from "axios";

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFail = (err) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    type: err,
  };
};

export const fetchUsersRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)))
      .catch((err) => dispatch(fetchUsersFail(err.mesage)));
  };
};
