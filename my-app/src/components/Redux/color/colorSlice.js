import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "blue",
  },
  reducers: {
    changeColor: (state, action) => {
      console.log("TYPE", state.value);
      console.log("PAYLOAD", action.payload);
      state.value = action.payload.color;
    },
  },
});
export const { changeColor } = colorSlice.actions;
//taking reducer
export default colorSlice.reducer;
