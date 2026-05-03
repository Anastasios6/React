export const sayHello = () => {
  return {
    type: "SAY_HELLO",
    payload: "Hi ",
  };
};
export const sayGoodbye = () => {
  return {
    type: "SAY_GOODBYE",
    payload: "Goodbye and thanks",
  };
};
