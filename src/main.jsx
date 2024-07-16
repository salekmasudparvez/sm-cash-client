import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Registration from './pages/Authentication/Registration';
import Login from './pages/Authentication/Login';
import { Toaster } from 'react-hot-toast';
import DashBoardLayout from './layouts/DashBoardLayout';
import Balance from './pages/dashboard/User/Balance/Balance';
import SendMoney from './pages/dashboard/User/SendMoney/SendMoney';
import Cashin from './pages/dashboard/User/Cashin/Cashin';
import Cashout from './pages/dashboard/User/Cashout/Cashout';
import Transaction from './pages/dashboard/User/Transactions/Transaction';
import TransactionManagement from './pages/dashboard/Agent/TransactionManagement/TransactionManagement';
import TransactionHistory from './pages/dashboard/Agent/TransactionHistory/TransactionHistory';
import AuthProvider from './provider/AuthProvider';
import UserRoutes from './privateRoutes/UserRoutes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
const router = createBrowserRouter([

  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/",
        element: <UserRoutes><Balance /></UserRoutes>,
      },
      {
        path: "/dashboard/send",
        element: <UserRoutes><SendMoney /></UserRoutes>,
      },
      {
        path: "/dashboard/cashin",
        element: <UserRoutes><Cashin /> </UserRoutes>,
      },
      {
        path: "/dashboard/cashout",
        element: <UserRoutes><Cashout /></UserRoutes>,
      },
      {
        path: "/dashboard/transaction",
        element: <UserRoutes><Transaction /></UserRoutes>,
      },
      //agent
      {
        path: '/dashboard/agent/transaction',
        element: <TransactionManagement />
      },
      {
        path: '/dashboard/agent/transactionhistory',
        element: <TransactionHistory />
      }
    ]
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>

    </AuthProvider>

  </React.StrictMode>
);