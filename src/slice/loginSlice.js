import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login!!");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: (state, actions) => {
      console.log("logout@@");
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
