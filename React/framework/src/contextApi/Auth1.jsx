import React, { createContext, useState } from 'react'
export const Authcontext = createContext();
const Auth1 = ({children}) => {
    const [auth, setAuth] = useState(false);
    const Login = ()=>{
        setAuth(true)
    }
    const Logout = ()=>{
        setAuth(false)
    }
  return (
    <div>
      <Authcontext.Provider value={{auth, Login, Logout}}>{children}</Authcontext.Provider>
    </div>
  )
}

export default Auth1
