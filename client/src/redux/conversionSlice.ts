import { createSlice } from "@reduxjs/toolkit";
import { IConvertResponseData } from "../Types";

const initialState: IConvertResponseData = {
  base_code: "",
  target_code: "",
  conversion_rate: 0,
  conversion_result: 0,
  time_last_update_utc: "",
  result: "",
};

export const conversionSlice = createSlice({
  name: "conversionSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.base_code = action.payload.base_code;
      state.target_code = action.payload.target_code;
      state.conversion_rate = action.payload.conversion_rate;
      state.conversion_result = action.payload.conversion_result;
      state.time_last_update_utc = action.payload.time_last_update_utc;
    },
    clearData: (state) => {
      state.base_code = initialState.base_code;
      state.target_code = initialState.target_code;
      state.conversion_rate = initialState.conversion_rate;
      state.conversion_result = initialState.conversion_result;
      state.time_last_update_utc = initialState.time_last_update_utc;
      state.result = initialState.result;
    },
  },
});

export const { setData, clearData } = conversionSlice.actions;
export default conversionSlice.reducer;
