import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currenciesSlice";
import conversionReducer from "./conversionSlice";

export const store = configureStore({
  reducer: { currenciesReducer, conversionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
