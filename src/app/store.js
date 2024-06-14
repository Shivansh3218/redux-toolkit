import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import formSlice from "../features/form/fromSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    form: formSlice,
  },
});

//A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it, which triggers the root reducer function to calculate the new state.
