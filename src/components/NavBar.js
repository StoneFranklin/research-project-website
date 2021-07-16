import React from 'react'
import '../App.css'
import { Grid } from '@material-ui/core'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Grid 
                container 
                justifyContent="flex-start"
                alignItems="center" 
                spacing={5} 
            >
                <Grid container item xs={9} justifyContent="flex-start">
                    <NavLink to="/" className="logo"> 
                        <h3 className="button-text">Logo or Name</h3>
                    </NavLink>
                </Grid>

                <Grid container item xs={1} justifyContent="center">
                    <NavLink to="/about" className="link" activeClassName="active">
                        <h3 className="button-text">About</h3>
                    </NavLink>
                </Grid>

                <Grid container item xs={1} justifyContent="center">
                    <NavLink to="/links" className="link" activeClassName="active">
                        <h3 className="button-text">Links</h3>
                    </NavLink>
                </Grid>

                <Grid container item xs={1} justifyContent="center">
                    <NavLink to="/gallery" className="link" activeClassName="active">
                        <h3 className="button-text">Gallery</h3>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavBar