import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/NavBar.css'
import Register from './components/register/Register';
import Login from './components/login/Login'
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [questions, setQuestions] = useState([])
  
  const getQuestions =() =>{
  fetch('/questions/')
  .then(res => res.json())
  .then(questions => {
    setQuestions(questions)
  })
  }
 
  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token) setLoggedIn(true);
getQuestions()
  },[])
  



  return (
  <>
    <Nav loggedIn={loggedIn}/>
    <Routes>
      <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
      <Route path='/register' element ={<Register/>}/> 
      <Route path='/' element={<Home questions={questions} loggedIn={loggedIn}/>} />
   </Routes>
    
  </>
  );
}

export default App;
