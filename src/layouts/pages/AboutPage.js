import React from "react";
import BasicLayout from "../BasicLayout";
import { useSelector } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";

function AboutPage() {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  if (!isLogin) {
    return moveToLoginReturn();
  }

  return (
    <BasicLayout>
      <div>AboutPage</div>
    </BasicLayout>
  );
}

export default AboutPage;
