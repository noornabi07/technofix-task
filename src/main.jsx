import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import UserDetails from './components/Home/Users/UserDetails.jsx';
import UserList from './components/AddUser/UserList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/adduser',
        element: <UserList></UserList>
      },
      {
        path: '/user/:id',
        element: <UserDetails></UserDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </React.StrictMode>,
)
