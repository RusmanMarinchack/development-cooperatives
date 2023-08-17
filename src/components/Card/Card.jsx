import React from "react";

// Style
import './Card.scss'

function Card({ children, cls }) {
    return(
        <div className={`${cls} card`}>
            { children }
        </div>
    )
}

export default Card