import React from "react";
import { useDispatch } from "react-redux";
import loginSlice, { logout } from "../../slice/loginSlice";

function LogoutComponent() {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    // 두가지로 쓸 수 있음
    // dispatch(loginSlice.actions.logout())
    dispatch(logout());
  };

  return (
    <div className="h-screen  flex items-center">
      <div className="container mx-auto">
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div className="mb-5">
            <h3 className="font-bold text-2xl">LOGOUT</h3>
          </div>

          <button
            className="w-full bg-gray-800 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            onClick={handleClickLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutComponent;
