import React from 'react'
import '../App.css'
import PersonCard from './PersonCard'
import Title from './Title'
import { Grid } from '@material-ui/core'

const collaborators = [
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
    {name: "Stone Franklin", title: "Research Assistant", school: "University of North Georgia"},
]

const Collaborators = () => {
    return(
        <div className="container">
            <div className="collaborators">
                <Title text="Collaborators" />
                <Grid container justifyContent="center" alignItems="center" spacing={8} className="collaborator-grid">
                    {collaborators.map(element => 
                        <Grid item>
                            <PersonCard name={element.name} title={element.title} school={element.school} />
                        </Grid>
                    )}
                </Grid>
                
            </div>
        </div>
    )
}

export default Collaborators