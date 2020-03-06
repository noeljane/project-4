// import NavBar from ".";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     logo: {
//       maxWidth: 100,
//       maxHieght: 100
//       },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     toolbar: {
//       minHeight: 128,
//       alignItems: 'flex-start',
//       paddingTop: theme.spacing(1),
//       paddingBottom: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       alignSelf: 'flex-end',

    
//     },
//   }));
  
//   export default NavBar;

import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Nav = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
`
export const Link = styled(NavLink)`
  padding: 40px 10px 0px 10px;
  text-decoration: none;
  color: black;
`
export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin: 5px 0px 0px 5px;
`
export const LogoDiv = styled.div`
  width: 20%;
`

export const LogOut = styled.span`

`
export const Motto = styled.h2`
  position: relative;
  top: 25px;
`
export const MottoDiv = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

`