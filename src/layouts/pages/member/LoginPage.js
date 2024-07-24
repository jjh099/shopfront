import React from "react";
import BasicMenu from "../../../components/menus/BasicMenu";
import LoginComponent from "../../../components/member/LoginComponent";

function LoginPage() {
  return (
    <div>
      <div className="container mx-auto">
        <BasicMenu />
      </div>
      <LoginComponent />
    </div>
  );
}

export default LoginPage;
