import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = "http://localhost:3006"

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {

            e.preventDefault();
           const userdata  = await fetch(`${API}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name, email, password, cpassword, role}),
              })
        try {
            const userStatus = await userdata.json();
            console.log(userStatus);
            alert("Registraion Successful");
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <h1 className="register">Register</h1>
    <h3>
        Hello {name}
    </h3>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 offset-lg-4'>
                <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter your name'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type='text'
                    placeholder='Enter your email address'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    type='text'
                    placeholder='Enter your password'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                     <input
                    type='text'
                    placeholder='Confirm your password'
                    className='form-control mb-4'
                    required
                    autoFocus
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                    />

                        <div className="form-group">
                        <label htmlFor="role">I am</label>
                        <select value={role}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            onChange={(e) => setRole(e.target.value)}
                        </select>
                        </div>

                
                    <button className='btn btn-primary col-12 mb-4'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup