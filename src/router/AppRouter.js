import React, { useContext, useEffect } from "react";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ChatPage  } from "../pages/ChatPage";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from "./AuthRouter";
import { AuthContext } from "../auth/AuthContext";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {

    const {auth, verificaToken} = useContext(AuthContext)

    useEffect( () => {
        verificaToken();
    }, [verificaToken])

    return(
        <div>
            <Routes>
                <Route path="/auth">
                    <Route path="login" element={ auth.logged ? (<Navigate to="/chat"/>) : <LoginPage/>} />
                    <Route path="register" element={<RegisterPage/>} />
                </Route>
                <Route path="/chat" element={
                    <PrivateRoute>
                        <ChatPage/>
                    </PrivateRoute> } />
            </Routes>
        </div>
    )
}