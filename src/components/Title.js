import React from 'react'
import '../App.css'

const Title = (props) => {
    return(
        <div className="title-container">
            <h1 className="title">{props.text}</h1>
        </div>
    )
}

export default Title