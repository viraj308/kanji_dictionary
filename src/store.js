import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk"; // Import Redux Thunk middleware

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
