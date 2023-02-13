import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/useAuth";
import HomePage from "./Pages/HomePage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

const PrivateRoute = ({children, redirectTo}: {children: JSX.Element, redirectTo: string}) => {
    const isAuth = localStorage.getItem("token") !== null;
    return isAuth ? children : <Navigate to={redirectTo}/>
}

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute redirectTo="/signin">
                <HomePage/>
            </PrivateRoute> }/> 
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}