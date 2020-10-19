import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import './navMenu.css';
import {Hidden} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {navMenuRoutes} from '../../../routes/navMenuRoutes';
import Drawer from '@material-ui/core/Drawer';
import NavDrawer from '../navDrawer';

const NavMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Hidden smUp>
            <IconButton edge="start" color="inherit" aria-label="menu"
              onClick={handleDrawer}>
              <MenuIcon/>
            </IconButton>
          </Hidden>

          <NavLink to="/today">
            <div className="header-container">
              <h3>SS-WeatherApp</h3>
              <BeachAccessIcon className="header-icon"/>
            </div>
          </NavLink>

          <Hidden smDown>
            <div className="nav-links-container">
              {navMenuRoutes.map((route, index) => (
                <NavLink to={route.path} key={index}
                  activeClassName="active-link">
                  {route.title}
                </NavLink>
              ))}
            </div>
          </Hidden>

          <div className="github-button">
            <a href="https://github.com/Gasyanich/ss-weather">
              <IconButton color="inherit">
                <GitHubIcon/>
              </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawer}
      >
        <NavDrawer onListItemClick={() => setDrawerOpen(false)}/>
      </Drawer>
    </div>
  );
};

export default NavMenu;
