import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import loginSlice from "../../slice/loginSlice";

function BasicMenu() {
  // loginSlice에 있는 데이터를 사용하는고임
  const loginState = useSelector((state) => state.loginSlice);
  return (
    <div className="flex">
      <div className="w-4/5">
        <ul className="flex gap-3">
          <li>
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>

          {/* loginSlice에 입력된 이메일이 있으면 나오고 이메일이 없으면 null */}
          {loginState.email ? (
            <li>
              <Link to="/product">PRODUCT</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="w-1/5">
        {/* loginSlice에 입력된 이메일이 있으면 logout 이메일이 없으면 login */}
        {!loginState.email ? (
          <Link to="/member/login">Login</Link>
        ) : (
          <Link to="/member/logout">Logout</Link>
        )}
      </div>
    </div>
  );
}

export default BasicMenu;
