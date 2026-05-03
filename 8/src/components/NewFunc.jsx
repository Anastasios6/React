import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newAction, increment, decrement } from "../actions/NewAction";

export const NewFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.NewReducer.greeting);
  const msg = useSelector((state) => state.NewReducer.msg);
  const count = useSelector((state) => state.NewReducer.count);

  useEffect(() => {
    dispatch(newAction());
  }, [dispatch]);
  return (
    <div id="NewActionsFunc">
      <span>New Actions</span>
      <br />
      {greeting}
      <hr />
      <button
        onClick={() => {
          console.log("button clicked");

          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <span>{msg}</span>
      <span>Count is: {count}</span>
    </div>
  );
};
