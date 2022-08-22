import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PublicRoute = ({children}) => {
    const {auth} = useContext(AuthContext);

    if (!auth.logged) {
        return (<Navigate to="/auth/login"/>)
    } else {
        return (children)
    }
}

export default PublicRoute;