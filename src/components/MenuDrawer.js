import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink, Link } from "react-router-dom"
import { Grid, IconButton, Drawer, List, ListItem } from '@material-ui/core'

const data = [
  {
    path: '/about', 
    text: 'About'
  },
  {
    path: '/links', 
    text: 'Links'
  },
  {
    path: '/camera', 
    text: 'Camera'
  },
  {
    path: '/collaborators', 
    text: 'Collaborators'
  },
  {
    path: '/contact', 
    text: 'Contact'
  },
  {
    path: '/meetings', 
    text: 'Meetings'
  },
  {
    path: '/publications', 
    text: 'Publications'
  },
]

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false, 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((element) => (
          <ListItem button key={element.text}>
            <Link to={element.path} className="link">
                {element.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="nav-bar">
            <Grid 
                container 
                justifyContent="flex-start"
                alignItems="center" 
                spacing={5} 
            >
                <Grid container item xs={9} justifyContent="flex-start" id="padding-left" >
                    <NavLink to="/" className="logo"> 
                        <h3 className="button-text">Logo</h3>
                    </NavLink>
                </Grid>

                <Grid container item xs={3} justifyContent="flex-end" id="padding-right" >
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer('right', true)}>
                        <MenuIcon className="menu-icon" />
                    </IconButton>
                    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                        {list('right')}
                    </Drawer>
                </Grid>
            </Grid>
        </div>
  );
}