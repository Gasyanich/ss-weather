import React from 'react';
import {Divider, List} from '@material-ui/core';
import {navMenuRoutes} from '../../../routes/navMenuRoutes';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import './navDrawer.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const NavDrawer = ({onListItemClick}) => {
  return (
    <div>
      <List className="list">
        <h3>Меню</h3>
        <Divider/>
        {navMenuRoutes.map(((route, index) => (
          <ListItem key={index} onClick={onListItemClick}
            component={NavLink} to={route.path} divider>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.title}/>
            <Divider/>
          </ListItem>
        )))}
      </List>
    </div>
  );
};

export default NavDrawer;
