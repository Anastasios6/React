export const newAction = () => {
  return {
    type: "Hi from newAction",
    payload: "Hi from newAtion",
  };
};

export const increment = () => {
  return {
    type: "increment",
  };
};

export const decrement = () => {
  return {
    type: "decrement",
  };
};
