import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchItem: "",
    page: "1",
    searchResult: [],
    offlineData: [],
  },
  reducers: {
    getData(state, action) {
      state.searchItem = action.payload.inputText;
    },
    replaceData(state, action) {
      state.searchResult = action.payload.searchResult;
    },
    setOfflineData(state, action) {
      state.offlineData = action.payload.offlineData;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
