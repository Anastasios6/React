import React, { useEffect } from "react";
import { UsersComponent } from "./UsersComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, removeUsers } from "./duck/Operations";
export default function UsersContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const error = useSelector((state) => state.usersReducer.error);

  function deleteUser(userId) {
    dispatch(removeUsers(userId));
  }
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div id="users-container">
      <UsersComponent listOfUsers={users} deleteUser={deleteUser} />
    </div>
  );
}
