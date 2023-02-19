import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsInitialState from 'data/contacts.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    items: contactsInitialState,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const newContact = { id: nanoid(), name, number };
      state.items = [...state.items, newContact];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
