import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";
const initialState = {
  cakes: 10,
};
const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.cakes < action.payload) {
        alert(
          `Not enough cakes, only ${state.cakes} left! 
          Please Restock first.`,
        );
        return { ...state };
      }
      return {
        ...state,
        cakes: state.cakes - action.payload,
      };
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
