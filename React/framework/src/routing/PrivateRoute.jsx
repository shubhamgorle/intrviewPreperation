import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../contextApi/Auth1";

function PrivareRoute({children}){
  const {auth} = useContext(Authcontext)
  if(auth){
    return children
  }
  else{
    return <Navigate to='/login'/>
  }
}
export default PrivareRoute