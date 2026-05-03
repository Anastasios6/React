import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import SayHelloReducer from "./reducers/SayHelloReducer";
import NewReducer from "./reducers/NewReducer";

const reducer = {
  SayHelloReducer: SayHelloReducer,
  NewReducer: NewReducer,
};

const logger = createLogger();
export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
