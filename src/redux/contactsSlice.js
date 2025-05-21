import { createAction } from "@reduxjs/toolkit";
export const addContact = createAction("contact/add");
export const deleteContact = createAction("contact/delete");
const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "contact/add":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "contact/delete":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
}
