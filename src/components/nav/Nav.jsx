import React from 'react'
import { Link } from 'react-router-dom'


function Nav({loggedIn}) {
  const logout = ()=>{
    localStorage.removeItem("token")
    
  }
  return (
    <>
    {loggedIn ? (
        <nav>
            <button>logout</button>
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
