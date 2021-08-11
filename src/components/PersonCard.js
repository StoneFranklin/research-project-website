import React from 'react'
import '../App.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const PersonCard = (props) => {
    return(
        <Card id="person-card" color="primary">
            <CardMedia
            component="img"
            alt="Photo"
            height="220"
            image={props.image}
            title="Contemplative Reptile"
            />
            <CardContent>
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <p>{props.school}</p>
            </CardContent>
            
        </Card>
    )
}

export default PersonCard