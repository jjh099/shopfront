import React from "react";
import { RouterProvider } from "react-router-dom";
import root from "./router/router";

function App() {
  return <RouterProvider router={root}></RouterProvider>;
}

export default App;
