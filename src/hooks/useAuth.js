import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthProvider";


const useAuth = () => {
    const { auth } = useContext(AuthContext);
    console.log({auth});
    useDebugValue(auth, auth => auth?.userId ? "Logged In" : "Logged Out")
    console.log(auth?.userId ? "Logged In" : "Logged Out");
    return useContext(AuthContext);
}

export default useAuth;