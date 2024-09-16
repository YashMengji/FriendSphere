import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Register from '../components/Register.jsx'
import Login from '../components/Login.jsx'
import UserContext from '../contexts/UserContext.jsx'

const createRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [ 
        {
          path: "/register", 
          element:
          <UserContext>
            <Register/>
          </UserContext>
        }, 
        {
          path: "/login", 
          element: <Login/>
        }, 
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createRouter}/>
  </StrictMode>,
)
