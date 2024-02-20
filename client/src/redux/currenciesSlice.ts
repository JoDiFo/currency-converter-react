import { createSlice } from "@reduxjs/toolkit";
import { IConvertPair } from "../Types";

const convertPair: IConvertPair = {
  from: "",
  to: "",
};

const initialState = {
  convertPair,
};

export const currenciesSlice = createSlice({
  name: "currenciesSlice",
  initialState,
  reducers: {
    setPair: (state, action) => {
      state.convertPair.from = action.payload.from;
      state.convertPair.to = action.payload.to;
    },
  },
});

export const { setPair } = currenciesSlice.actions;
export default currenciesSlice.reducer;
