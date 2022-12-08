import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import DetailLoker from "./container/Loker/DetailLoker";
 import Login from "./container/Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./container/User/UserProfile";
import Monitoring from "./container/Admin/Monitoring";
import UserApply from "./container/User/UserApply";
import UserNotification from "./container/User/UserNotification";

import SignUp from "./container/Auth/SignUp";
import Users from "./container/User/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/DetailLoker/:id",
    element: <DetailLoker />,
  },
  {
    path: "/Monitoring",
    element: <Monitoring />,
  },
  {
    path: "/Monitoring/:menu",
    element: <Monitoring />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/Users/:menu",
    element: <Users />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  // {
  //   path: "/UserApply",
  //   element: <UserApply />,
  // },
  // {
  //   path: "/UserNotification",
  //   element: <UserNotification />,
  // },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
