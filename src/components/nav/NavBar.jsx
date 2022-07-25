import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "navBar.css";
import Logo from "../smallComponents/Logo";
//meniu navigacija
function Nav({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <>
    {loggedIn ? (
        <nav>
            <button onClick={logout}>logout</button>
        </nav>
    ): (
        <nav>
        <Link to='/login'>
        <button>Login</button>
        </Link>
       
       <Link to='/register'>
       <button>Sign up</button>
       </Link>
    </nav>
    )}
    </>
   
  )
}

export default Nav
