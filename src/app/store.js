import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

//A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it, which triggers the root reducer function to calculate the new state.
