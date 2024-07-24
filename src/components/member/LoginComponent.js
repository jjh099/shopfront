import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginSlice, { login } from "../../slice/loginSlice";

const initState = {
  email: "",
  pw: "",
};

function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const loginState = useSelector((state) => state.loginSlice);
  console.log("email :: " + loginState.email);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // e.target.name = input name
    loginParam[e.target.name] = e.target.value;
    console.log(loginParam);
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    // 두가지로 사용 가능
    // dispatch(loginSlice.actions.login());
    dispatch(login(loginParam));
    //loginparam -> slice로 보냄
  };

  return (
    <div className="h-screen  flex items-center">
      <div className="container mx-auto">
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Welcome to Startup</h3>
            <p className="text-gray-600 pt-2">Sign in to your account.</p>
          </div>
          <form className="flex flex-col">
            <div className="bg-white mt-10 rounded pt-3 mb-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-300 transition duration-500 px-3 pb-3"
                value={loginParam.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-white">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pw"
                className="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-300 transition duration-500 px-3 pb-3"
                value={loginParam.pw}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-400 hover:text-blue-700 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              onClick={handleClickLogin}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
