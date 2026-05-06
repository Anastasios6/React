import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducer";
import UsersReducer from "./reducers/UsersReducer";

const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
  UsersReducer: UsersReducer,
};

const logger = createLogger();

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
