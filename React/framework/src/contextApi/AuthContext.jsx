import { React, createContext, useState } from 'react'
export const AuthContext = createContext();
const AuthContextComponent = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const handleAuth  = (data)=>{
        setIsAuth(data)
    }
    return (
        <div>
            <AuthContext.Provider value={{ isAuth, handleAuth }}>{children}</AuthContext.Provider>
        </div>
    )
}

export default AuthContextComponent
