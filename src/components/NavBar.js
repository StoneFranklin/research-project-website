// import React, { useState } from 'react'
// import '../App.css'
// import { Grid, IconButton, Menu, MenuItem } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
// import { NavLink, Link } from "react-router-dom"

// const NavBar = () => {
//     const [value, setValue] = useState(null)

//     const handleClick = (event) => {
//         setValue(event.currentTarget)
//     }

//     const handleClose = () => {
//         setValue(null)
//     }

//     return (
//         <div className="nav-bar">
//             <Grid 
//                 container 
//                 justifyContent="flex-start"
//                 alignItems="center" 
//                 spacing={5} 
//             >
//                 <Grid container item xs={9} justifyContent="flex-start" id="padding-left" >
//                     <NavLink to="/" className="logo"> 
//                         <h3 className="button-text">Logo</h3>
//                     </NavLink>
//                 </Grid>

//                 <Grid container item xs={3} justifyContent="flex-end" id="padding-right" >
//                     <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                         <MenuIcon className="menu-icon" />
//                     </IconButton>
//                     <Menu
//                         id="simple-menu"
//                         anchorEl={value}
//                         keepMounted
//                         open={Boolean(value)}
//                         onClose={handleClose}
//                     >
//                         <MenuItem onClick={handleClose} >
//                             <NavLink to="/about" className="link">
//                                 About
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/links" className="link">
//                                 Links
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/camera" className="link">
//                                 Camera
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/collaborators" className="link">
//                                 Collaborators
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/contact" className="link">
//                                 Contact
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/meetings" className="link">
//                                 Meetings
//                             </NavLink>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <NavLink to="/publications" className="link">
//                                 Publications
//                             </NavLink>
//                         </MenuItem>
//                     </Menu>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default NavBar