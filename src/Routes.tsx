import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}