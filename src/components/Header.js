import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Badge,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navText: {
    flex: 1,
  },
  tagLine: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar>
        <SideDrawer>
          <IconButton color='inherit'>
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant='h6' className={classes.navText}>
          Blogging Website
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider style={{ backgroundColor: '#888888' }} />
      <Toolbar className={classes.tagLine}>
        Express your emotion through words
      </Toolbar>
    </Container>
  );
};

export default Header;
