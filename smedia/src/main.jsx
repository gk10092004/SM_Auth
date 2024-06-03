import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Registation from './components/Registation.jsx'
import PassForget from './components/PassForget.jsx'
import Feed from './components/Feed.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path: "/signup",
    element: <Registation/>,
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/password-reset",
    element: <PassForget/>,
  },
  {
    path: "/feed-home-page",
    element: <Feed/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
