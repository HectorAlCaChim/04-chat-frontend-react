import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { types } from "../types/types";
export const SidebarItem = ({usuario}) => {
    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;

    const onClick = async() => {
        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);
        dispatch({
            type: types.cargarChat,
            payload: resp.messages,
        });
        scrollToBottom('messages');
        // mover el scroll
    }

    // cargar los mensajes del chat

    
    return (
        <div onClick={onClick}
        className={`chat_list ${ (usuario.uid == chatActivo) && 'active_chat'}`}>
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{usuario.nombre}</h5>
                    {
                        (usuario.online) ?
                        <span className="text-success">online</span> :
                        <span className="text-danger">offline</span>
                    }
                </div>
            </div>
        </div>
    )
}