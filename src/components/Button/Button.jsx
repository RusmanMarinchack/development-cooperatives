import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Button({ cls, text, id}) {
    return(
        <AnchorLink offset='68' href={`#${id}`} className={ cls }>{ text }</AnchorLink>
    )
}

export default Button