import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../BasicLayout";

function MainPage() {
  return (
    // <div>
    //   MainPage
    //   <Link to="/about">about</Link>
    // </div>

    <BasicLayout>
      <div className="bg-red-100">Main page</div>
    </BasicLayout>
  );
}

export default MainPage;
