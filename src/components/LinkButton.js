import React from 'react'
import '../App.css'

const LinkButton = (props) => {
    return(
        <div className="link-button">
            <a href={props.url} target="_blank" rel="noreferrer noopener">
                {props.text}
            </a>
        </div>
    )
}

export default LinkButton