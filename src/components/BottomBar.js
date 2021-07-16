import React from 'react'
import '../App.css'
import { Grid } from '@material-ui/core'

const BottomBar = () => {
    return (
        <div className="bottom-bar">
            <Grid 
                container 
                justifyContent="flex-start"
                alignItems="center" 
                spacing={5} 
            >
                <Grid container item xs={6} justifyContent="flex-start">
                    <a href="https://ung.edu/" className="logo"> 
                        <h3 className="button-text">UNG logo here</h3>
                    </a>
                </Grid>

                <Grid container item xs={6} justifyContent="flex-end">
                    <a href="https://www.aum.edu/" className="logo">
                        <h3 className="button-text">AUM logo here</h3>
                    </a>
                </Grid>

            </Grid>
        </div>
    )
}

export default BottomBar