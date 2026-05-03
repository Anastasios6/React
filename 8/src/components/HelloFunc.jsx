import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sayHello, sayGoodbye } from "../actions/SayHelloActions";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const farewell = useSelector((state) => state.SayHelloReducer.farewell);
  useEffect(() => {
    dispatch(sayHello);
    dispatch(sayGoodbye);
  }, []);
  return (
    <div id="hello-func">
      <h2>Functional hi:{greeting}</h2>
      <hr />
      <h2>Functional Goodbye:{farewell}</h2>
    </div>
  );
};
