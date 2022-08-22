import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoute = ({children}) => {
    const {auth} = useContext(AuthContext);

    if (auth.logged) {
        return (children)
    } else {
        return (<Navigate to="/auth/login"/>)
    }
}

export default PrivateRoute;