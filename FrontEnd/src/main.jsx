import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Login from "./Components/Login";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import {AuthProvider} from "./auth/AuthProvider";
//import Dashboard from "./Components/Dashboard";
import Dashboard from "./routes/Dashboard";
//import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./routes/Profile";

import "./index.css";
import Employee from "./Components/Employee";
import Category from "./Components/Category";
import Customer from "./Components/Customer";
import Contacts from "./scenes/contacts";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
     element: <Signup />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/categoria",
        element: <Category />,
      },
      {
        path: "/cliente",
        element: <Customer />,
      },
      {
        path: "/cliente moderno",
        element: <Contacts />,
      },
      {
        path: "/deudas",
        element: <Customer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);