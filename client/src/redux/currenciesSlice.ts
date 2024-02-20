import { createSlice } from "@reduxjs/toolkit";
import { ICode, IConvertPair } from "../Types";

const convertPair: IConvertPair = {
  from: "",
  to: "",
};

const codeList: ICode[] = [];

const initialState = {
  convertPair,
  codeList,
};

export const currenciesSlice = createSlice({
  name: "currenciesSlice",
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.convertPair.from = action.payload;
    },
    setTo: (state, action) => {
      state.convertPair.to = action.payload;
    },
    setCodes: (state, action) => {
      state.codeList = action.payload;
    },
  },
});

export const { setFrom, setTo, setCodes } = currenciesSlice.actions;
export default currenciesSlice.reducer;
