import React from "react";
import BasicMenu from "../../../components/menus/BasicMenu";
import LogoutComponent from "../../../components/member/LogoutComponent";

function LogoutPage() {
  return (
    <div>
      <div className="container mx-auto">
        <BasicMenu />
      </div>
      <LogoutComponent />
    </div>
  );
}

export default LogoutPage;
