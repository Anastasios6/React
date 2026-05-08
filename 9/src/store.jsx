import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { usersReducer } from "./components/users/duck";
import { authReducer } from "./components/auth/duck/Index";

const reducer = {
  usersReducer: usersReducer,
  authReducer: authReducer,
};

const logger = createLogger();

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
