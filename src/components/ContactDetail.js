import React from 'react'

const ContactDetail = (props) => {
    return (
        <div className="contact-detail">
            <h1>{props.name}</h1>
            <h3>{props.jobTitle}</h3>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    )
}

export default ContactDetail