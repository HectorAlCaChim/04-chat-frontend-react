import React from "react";
import { ChatPage  } from "../pages/ChatPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import '../css/login-register.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AuthRouter = () => {
    return(
        <div className="limiter">
		    <div className="container-login100">
			    <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        <Route path="/auth/login" element={<LoginPage/>} />
                        <Route path="/auth/register" element={<RegisterPage/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}