import { useContext } from "react";
import { AuthContext } from "../context/auth.tsx";

const useAuth = ()=>{
    return useContext(AuthContext)
}

export default useAuth;