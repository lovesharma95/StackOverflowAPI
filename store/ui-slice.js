import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "search",
  initialState: { status: "No data found" },
  reducers: {
    showNotification(state, action) {
      state.status = action.payload.status;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
