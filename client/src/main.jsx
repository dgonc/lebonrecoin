import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserDashoard from "./pages/UserDashboard";
import { addItems } from "./services/request";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <UserDashoard />,
    action: addItems,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
