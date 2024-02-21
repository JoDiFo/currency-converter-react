import { createSlice } from "@reduxjs/toolkit";
import { ICode, IConvertPair } from "../Types";

interface ICurrenciesSlice {
  convertPair: IConvertPair;
  codeList: ICode[];
  amount: number;
  selected: ICode[];
}

const initialState: ICurrenciesSlice = {
  convertPair: {
    from: "",
    to: "",
  },
  codeList: [],
  amount: 1.0,
  selected: [],
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
      state.amount = action.payload;
    },
    addCurrency: (state, action) => {
      const newItems = [...state.selected, action.payload]
      state.selected = newItems;
    },
    removeCurrency: (state, action) => {
      const found = state.selected.find((item) => item.includes(action.payload))
      if (!found) {
        return;
      }

      const index = state.selected.indexOf(found);
      const newItems = [
        ...state.selected.slice(0, index),
        ...state.selected.slice(index + 1, state.selected.length),
      ];
      state.selected = newItems;
    },
  },
});

export const { setFrom, setTo, setCodes, setAmount, addCurrency, removeCurrency } =
  currenciesSlice.actions;
export default currenciesSlice.reducer;
