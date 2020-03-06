import {AppBar, Tabs, Tab, Box, Toolbar} from '@material-ui/core'
import React from 'react';
//import Firebase from '../Firebase/firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  NavContainer,
  LogoDiv,
  Logo,
  Nav,
  Link,
  LogOut,
  MottoDiv,
  Motto
} from './styles';

import logo from '../Home/Images/1.png'




const NavBar = (props) => {
  const { classes } = props;
  return (
    <NavContainer>
      <LogoDiv>
        <Logo src={logo} alt="logo" />
      </LogoDiv>
      <MottoDiv>
        <Motto>"The Sane Entrepreneur is a community where you don't have to go through the burnout alone."</Motto>
      </MottoDiv>
      <Nav>
        <Link exact to='/'>
          Home
        </Link>
      {
        props.isLogged
        ?
        <LogOut onClick={props.logOut}>LOGOUT</LogOut>
        :
        <>
        <Link exact to='/login'>Login</Link>
        <Link exact to='/join'>Join</Link>
        </>
      }
      </Nav>
    </NavContainer>
    
  );
};

export default NavBar;