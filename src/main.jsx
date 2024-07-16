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
import DashBoardLayout from './layouts/DashBoardLayout';
import Balance from './pages/dashboard/User/Balance/Balance';
import SendMoney from './pages/dashboard/User/SendMoney/SendMoney';
import Cashin from './pages/dashboard/User/Cashin/Cashin';
import Cashout from './pages/dashboard/User/Cashout/Cashout';
import Transaction from './pages/dashboard/User/Transactions/Transaction';
import TransactionManagement from './pages/dashboard/Agent/TransactionManagement/TransactionManagement';
import TransactionHistory from './pages/dashboard/Agent/TransactionHistory/TransactionHistory';

const router = createBrowserRouter([
  {
    path:'/registration',
    element:<Registration/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path: "/",
    element: <DashBoardLayout/>,
    children:[
      {
        path: "/",
        element: <Balance/>,
      },
      {
        path: "/dashboard/send",
        element: <SendMoney/>,
      },
      {
        path: "/dashboard/cashin",
        element: <Cashin/>,
      },
      {
        path: "/dashboard/cashout",
        element: <Cashout/>,
      },
      {
        path: "/dashboard/transaction",
        element: <Transaction/>,
      },
      //agent
      {
        path:'/dashboard/agent/transaction',
        element:<TransactionManagement/>
      },
      {
        path:'/dashboard/agent/transactionhistory',
        element:<TransactionHistory/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);