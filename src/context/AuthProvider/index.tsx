import { createContext, useEffect, useState } from "react";

import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setTokenLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext) 

export const AuthProvider = ({children}:  IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()
  

    useEffect(() =>  {
        const user = getUserLocalStorage()
        const token = localStorage.getItem('token')
        if(user && token ) {
            setUser(user)
        }
    }, [])


    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)
        const token = {token: response.token}
        const payload = {email, password}
        setUser(payload)
        setTokenLocalStorage(token)
    }

    function logout () {
        setUser(null);
        setTokenLocalStorage(null)
        setUserLocalStorage(null);
    }
    
    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}