import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import Registration from './pages/Authentication/Registration';
import Login from './pages/Authentication/Login';
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:'/registration',
        element:<Registration/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);