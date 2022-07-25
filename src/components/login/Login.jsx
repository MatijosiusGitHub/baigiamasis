import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setLoggedIn}) {
  const navigate = useNavigate()
const loginUser=async(e)=>{
  e.preventDefault();
  const userData={
    username: e.target.username.value,
    password: e.target.password.value
  };
  await fetch("http://localhost:5000/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)

  })
.then(res=>res.json())
.then (data=>{
  if(data.error) return alert(data.error)
  
  localStorage.setItem('token', data.token)
  setLoggedIn(true)
  navigate('/', {replace: true})
})
.catch(error => console.log(error))
}
    return (
    <div>
      <form onSubmit={loginUser}>
      <h1>login</h1>
      <label htmlFor="username"> username</label>
      <input type="text" name='username'/>
      <label htmlFor="password">password</label>
      <input type="password" name="password"/>
    <button type='submit'>ok</button>
      </form>
      

     </div>
  )
}

export default Login
