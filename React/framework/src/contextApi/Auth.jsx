import React, { createContext, useState } from 'react'
export const AuthContexts = createContext();
const Auth = ({children}) => {
    const [state, setstate]=useState(false);
    const handleState = (()=>{
        setstate(!state)
    })
  return (
    <div>
      <AuthContexts.Provider value={{handleState, state}}>{children}</AuthContexts.Provider>
    </div>
  )
}

export default Auth
