import React from 'react'
import '../App.css'
import Title from '../components/Title'
import ContactDetail from '../components/ContactDetail'

const data = [
    {
        name: "First Last",
        jobTitle: "Job Title",
        email: "email@email.edu",
        phone: "012-345-6789"
    },
    {
        name: "First Last",
        jobTitle: "Job Title",
        email: "email@email.edu",
        phone: "012-345-6789"
    },
    {
        name: "First Last",
        jobTitle: "Job Title",
        email: "email@email.edu",
        phone: "012-345-6789"
    }
]

const Contact = () => {
    return(
        <div className="container">
           <div className="page-body">
                <Title text="Contact" />
                <div>
                    {data.map(element => {
                        return (
                            <ContactDetail 
                                name={element.name} 
                                jobTitle={element.jobTitle} 
                                email={element.email} 
                                phone={element.phone} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contact