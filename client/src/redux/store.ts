import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currenciesSlice";

export const store = configureStore({
  reducer: { currenciesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
