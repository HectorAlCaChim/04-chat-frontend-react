import React from "react";
import { fecha } from "../helpers/fecha";
export const OutgoingMessage = ({msg}) => {
    return(
        <div className="outgoing_msg">
            <div className="sent_msg">
            <p>{msg.mensaje}</p>
                <span className="time_date">{fecha(msg.createdAt)}</span>
            </div>
        </div>
    )
}