import React from 'react'
import { useState, useContext } from 'react'
// import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const API = "http://localhost:3006"

const Login = () => {
  // const { state, dispatch } = useContext(UserContext);
  // const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();
      //  const logindata  = await fetch("http://localhost:3006/login", {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({email, password}),
      //     });
         
      //   const res = await logindata.json();
        // console.log(res)
        const response = await fetch(`http://localhost:3006/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const res = await response.json();

        if (res.status === 400 || !res) {
          window.alert("Invalid Credentials");
      } else {
          // dispatch({ type: 'USER', payload: true });
          window.alert("Login Successfull");
          navigate("/dashboard")
      }
      //   try {
      //     if(res.status === "success"){
      //       window.alert("Logged in Successfully");
      //       navigate("/dashboard");
      //   } 
      // } catch (error) {
      //     window.alert("error logging in")
      //     console.log(error)
      //   }  
}

  return (
    <div>
      <h1 className="login">Login</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 mt-5">
            <form method= "POST" >
                <input
                    type='text'
                    placeholder='Enter your email'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    type='text'
                    placeholder='Enter your email address'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
              <button className="btn btn-primary col-12 mb-4" onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login