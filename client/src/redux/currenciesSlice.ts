import { createSlice } from "@reduxjs/toolkit";
import { ICode, IConvertPair } from "../Types";

interface ICurrenciesSlice {
  convertPair: IConvertPair;
  codeList: ICode[];
  amount: number;
}

const initialState: ICurrenciesSlice = {
  convertPair: {
    from: "",
    to: "",
  },
  codeList: [],
  amount: 1.0,
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
    setAmount: (state, action) => {
        state.amount = action.payload
    }
  },
});

export const { setFrom, setTo, setCodes, setAmount } = currenciesSlice.actions;
export default currenciesSlice.reducer;
