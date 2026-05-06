import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest } from "../actions/UsersActions";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer.users);
  const err = useSelector((state) => state.UsersReducer.err);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);
  return (
    <div id="usersContainer">
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id} id="user">
            <h1>Name:{user.name}</h1>
            <h2>Username:{user.username}</h2>
            <h3>E-mail:{user.email}</h3>
            <h3>Contact:{user.phone}</h3>
            <h3>
              Website: <a href="#">{user.website}</a>
            </h3>
          </div>
        );
      })}
    </div>
  );
};
