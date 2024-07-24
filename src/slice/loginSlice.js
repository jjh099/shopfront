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
      // loginComponent에서 입력받은 값을 initState:email에 넣어줌
      return { email: action.payload.email };
    },
    logout: (state, actions) => {
      console.log("logout@@");
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
