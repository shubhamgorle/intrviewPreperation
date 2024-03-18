import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
const Democontexts = () => {
    const {isAuth, handleAuth} = useContext(AuthContext);
    console.log(isAuth)
    const handleButton = ()=>{
handleAuth(!isAuth)
    }
  return (
    <div>
      <button onClick={handleButton}>Toggle</button>
    </div>
  )
}

export default Democontexts
