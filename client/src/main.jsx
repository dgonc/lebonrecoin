import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import App from "./App";
import UserDashoard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Search from "./pages/Search";
import "./styles/home.css";
import {
  getItems,
  getItemsByUser,
  getUsers,
  addItems,
  getItemByName,
} from "./services/request";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
        loader: getUsers,
      },
      {
        path: "/home",
        element: <Home />,
        loader: getItems,
      },
      {
        path: "/user/:id",
        element: <UserDashoard />,
        loader: getItemsByUser,
        action: addItems,
      },
      {
        path: "/items/:search",
        element: <Search />,
        loader: getItemByName,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
