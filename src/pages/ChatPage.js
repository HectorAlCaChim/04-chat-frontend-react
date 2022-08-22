import React, { useContext } from "react";
import { InboxPoble } from "../components/InboxPeoble";
import { Messages } from "../components/Messages";
import { ChatContext } from "../context/chat/ChatContext";
import '../css/chat.css'

export const ChatPage = () => {
    const { chatState } = useContext(ChatContext)
    return(
    <div className="messaging">
        <div className="inbox_msg">

            <InboxPoble />

            {/*<!-- Chat inicio -->*/}
            {
                (chatState.chatActivo )
                ? <Messages />
                : <div>Selecciona una conversion</div>
            }
            {/*{/*<!-- Chat Fin -->*/}

        </div>
    </div>
    )
}