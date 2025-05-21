import { createAction } from "@reduxjs/toolkit";

export const searchContact = createAction("filters/search");
const initialState = {
  name: "",
};
export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/search":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
