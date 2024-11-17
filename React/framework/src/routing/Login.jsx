import React, { useContext } from 'react'
import { Authcontext } from '../contextApi/Auth1'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {Login, Logout} = useContext(Authcontext);
    const navigate = useNavigate()
    const handleclick = () => {
        Login();
        navigate('/product')
    }
  return (
    <div>
      <h3>login</h3>
      <button onClick={handleclick}>Login</button>
      <button onClick={(()=>Logout())}>Logout</button>
    </div>
  )
}

export default Login
