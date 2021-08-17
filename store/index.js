import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
