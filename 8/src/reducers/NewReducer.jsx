const initialState = {
  greeting: "hi from new Reducer",
  count: 0,
  msg: "",
};

const NewReducer = (state = initialState, action) => {
  console.log("reducer action", action.type);

  switch (action.type) {
    case "Hi":
      return {
        ...state,
        greeting: action.payload,
      };
    case "increment":
      return {
        ...state,
        msg: "Added 1",
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        msg: "Decreased 1 ",
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default NewReducer;
