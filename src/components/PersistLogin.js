import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth, isLoggedIn } = useAuth();

    useEffect(() => {
        let isMounted = true;

        return () => isMounted = false;
    }, [])

    useEffect(() => {
        
    }, [isLoading])

    return (
        <>
            {!isLoggedIn
                ? <Outlet />
                : isLoading
                    ? <h1>Loading...</h1>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin