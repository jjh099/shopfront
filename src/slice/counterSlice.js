import { createSlice } from "@reduxjs/toolkit";

const initState = {
  num: 100, // -> store.js -> ChildOne.js
};

const counterStore = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    up: (state, actions) => {
      console.log("update");
      console.log(actions.payload);
      state.num = state.num + actions.payload;
    },
    down: (state, actions) => {
      console.log("dowm");
      state.num = state.num - actions.payload;
    },
  },
});

export default counterStore;
export const { up, down } = counterStore.actions;
