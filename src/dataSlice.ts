import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    updateData(state, action) {
      return { ...state, data: action.payload[0] };
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
