import React, { createContext, useCallback, useContext, useState} from 'react'
import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,

};

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(initialState);
    const {dispatch} = useContext(ChatContext);

    const login = async(data) => {
        const resp = await fetchSinToken('auth/login', data, 'POST');
        console.log(resp);
        if (resp.ok ) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.usuario.uid,
                email: resp.usuario.email,
                name: resp.usuario.nombre,
                logged: true,
                checking: false
            });
        }
        return resp.ok;
    }
    const register = async(data) => {
        const resp = await fetchSinToken('auth/new', data, 'POST');
        console.log(resp);
        if (resp.ok ) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.usuario.uid,
                email: resp.usuario.email,
                name: resp.usuario.nombre,
                logged: true,
                checking: false
            });
        }
        return resp.ok;
    }
    const verificaToken = useCallback(async() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setAuth({
                uid: null,
                checking: true,
                logged: false,
                name: null,
                email: null,
            });
            return false
        }
        const resp = await fetchConToken('auth/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: resp.usuario.uid,
                email: resp.usuario.email,
                name: resp.usuario.nombre,
                logged: true,
                checking: false
            });
            return true;
        } else {
            setAuth({
                uid: null,
                checking: true,
                logged: false,
                email: resp.email,
                name: resp.nombre,
            });
            return false;
        }
    },[]);

    const logout = () => {
        localStorage.removeItem('token');

        setAuth({
            uid: null,
            checking: true,
            logged: false,
            email: null,
            name: null,
        });

        dispatch({
            type: types.deleteSession
        });
    }  


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            register,
            verificaToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}