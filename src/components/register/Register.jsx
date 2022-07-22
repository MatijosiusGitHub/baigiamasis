import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

  const addUser = async (e) => {
    e.preventDefault();
    const userData= {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
    };
  await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(()=> navigate('/login', {replace: true}))
  .catch(err=> console.log('front', err))

  }
  return (
    <div>
      <form onSubmit={addUser}>
        <label htmlFor="username"> user name </label>;
        <input type ="text" name = "username"/>
        <label htmlFor="email">email </label>
        <input type="email"  name="email"/>
        <label htmlFor="password">password</label>
        <input type="password" name="password"/>
        <button type='submit'>"Ok"</button>
    </form>

    </div>
  )
}

export default Register

