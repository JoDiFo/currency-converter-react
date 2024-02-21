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
  },
});

export const { setData } = conversionSlice.actions;
export default conversionSlice.reducer;
