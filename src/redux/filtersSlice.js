import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
