import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginSlice, { login, loginPostAsync } from "../../slice/loginSlice";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const { doLogin, moveToPath } = useCustomLogin();

  const loginState = useSelector((state) => state.loginSlice);
  console.log("email :: " + loginState.email);

  const handleChange = (e) => {
    // e.target.name = input name
    loginParam[e.target.name] = e.target.value;
    console.log(loginParam);
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    // dispatch(login(loginParam));

    // 두가지로 사용 가능
    // dispatch(loginSlice.actions.login());
    // dispatch(login(loginParam)); // loginparam -> slice로 보냄

    // dispatch(loginPostAsync(loginParam))
    //   .unwrap()
    //   .then((data) => {
    //     console.log(data);

    //     if (data.error) {
    //       alert("이메일과 패스워드 불일치");
    //     } else {
    //       // alert("로그인성공");
    //       navigate({ pathname: "/" }, { replace: true });
    //       window.location.reload();
    //     }
    //   });

    doLogin(loginParam).then((data) => {
      if (data.error) {
        alert("이메일과 패스워드 확인!!!");
      } else {
        moveToPath("/");
        window.location.reload();
      }
    });
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
                className="bg-white rounded w-full text-gray-700 focus:outline-none border-2 border-gray-100 focus:border-pink-200 focus:shadow-custom  hover:shadow-custom transition duration-500 px-3 py-2"
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
                className="bg-white rounded w-full text-gray-700 focus:outline-none border-2 border-gray-100 focus:border-pink-200 focus:shadow-custom hover:shadow-custom transition duration-500 px-3 py-2"
                value={loginParam.pw}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              {/* a 태그는 페이지 새로고침 되서 입력중이던 상태가 날아감 a 대신 link 사용 */}
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-800 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>
            <button
              className="bg-gray-800 text-white font-bold py-2 rounded shadow-lg hover:bg-gray-700 hover:shadow-xl transition duration-200"
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
