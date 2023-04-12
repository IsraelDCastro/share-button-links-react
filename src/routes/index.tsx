import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Buttons from "@/examples/buttons";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Buttons />
  }
]);

export default routes;
