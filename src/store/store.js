import { configureStore } from "@reduxjs/toolkit";
import counterStore from "../slice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterStore.reducer, // <- counterSlice.js
  },
});

export default store;
