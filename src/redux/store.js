import { configureStore, createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add");
export const deleteContact = createAction("contact/delete");
const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};
function rootReduser(state = initialState, action) {
  switch (action.type) {
    case "contacts/add":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case "contact/delete":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: rootReduser,
});
