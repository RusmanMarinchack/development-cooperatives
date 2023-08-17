import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Button({ cls, text, link}) {
    return(
        <AnchorLink offset='68' href={`${link}`} className={ cls }>{ text }</AnchorLink>
    )
}

export default Button