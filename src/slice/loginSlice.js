import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  //   loadMemberCookie : 로그인된게 있으면 새로고침해도 유지하게 해줌
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("login!!");
      console.log(action.payload);
      // loginComponent에서 입력받은 값을 initState:email에 넣어줌
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("logout@@");

      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fullfilled");
        const payload = action.payload;
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload));
        }
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("reject");
      });
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
