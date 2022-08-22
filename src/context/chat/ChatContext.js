import React, { Children, createContext, useReducer  } from "react";
import { chatReducer } from "./ChatReducer";
export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, // UID DEL USUARIO AL QUE ENVIA MENSAJES
    usuarios: [],
    mensajes: [],
}

export const ChatProvider = ({children}) => {
    const [chatState, dispatch] = useReducer(chatReducer, initialState);


    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    ) 
}