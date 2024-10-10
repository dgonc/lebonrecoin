import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import UserDashoard from "./pages/UserDashboard";
import { getItems, addItems } from "./services/request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: getItems,
  },
  {
    path: "/user",
    element: <UserDashoard />,
    loader: getItems,
    action: addItems,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
