import React from 'react'
import '../App.css'
import Title from './Title'
import LinkButton from './LinkButton'
import { Grid } from '@material-ui/core'

const links = [
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
    {text: "DeepHyperX Github", url: "https://github.com/StoneFranklin/DeepHyperX"},
]

const Links = () => {
    return(
        <div className="container">
            <div className="collaborators">
                <Title text="Links" />
                <div className="link-text">
                    <Grid container justifyContent="center" alignItems="center" spacing={5}>
                        {links.map(element => 
                            <Grid item>
                                <LinkButton text={element.text} url={element.url} />
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Links