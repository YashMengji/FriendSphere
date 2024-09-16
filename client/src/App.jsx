import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Cookies from 'js-cookie'; // Import js-cookie to easily manage cookies
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import { useEffect } from "react";

function App() {


  return (
    <> 
      <Navbar/>
      <UserContext>
        <Outlet/>
      </UserContext>
    </>
  )
}

export default App
