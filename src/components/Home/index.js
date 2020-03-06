import React, { Component } from 'react'
//import { render } from '@testing-library/react'
import { ListItemAvatar, Typography, CssBaseline, ListItemIcon, withStyles, Link, Paper, TextField } from '@material-ui/core';
import { css } from '@material-ui/system';
import yellow from '@material-ui/core/colors/purple';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Avatar } from '@material-ui/core';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import wineTasting from '../Home/Images/2.png';
import paintAndSip from '../Home/Images/3.png';
import plantingClass from '../Home/Images/4.png';
import beachYoga from '../Home/Images/5.png';
import sba from '../Home/Images/6.png';
import investorPitching from '../Home/Images/7.png';
import mentor from '../Home/Images/8.png';
import accountability from '../Home/Images/9.png';
import lawyer from '../Home/Images/10.png';
import graphicDesigner from '../Home/Images/11.png';
import accountant from '../Home/Images/12.png';
import photographer from '../Home/Images/13.png';
import yec from '../Home/Images/15.png';
import meetup from '../Home/Images/14.png';
import startUpGrind from '../Home/Images/18.png';
import quilt from '../Home/Images/16.png';
import { NavLink } from 'react-router-dom';


const selfCare = [wineTasting, paintAndSip, plantingClass, beachYoga];
const learn = [sba, investorPitching, mentor, accountability];
const grow = [lawyer, graphicDesigner, accountant, photographer];
const connect = [yec, meetup, startUpGrind, quilt];

const y = <div>Young Entrepreneur Council is an invitation only community for entrepreneurs under the age of 45.</div>
const m = <div>Find out what's happening in Business Networking for Entrepreneurs Meetup groups in LA</div>
const s = <div>Startup Grind Los Angeles hosts monthly startup events for entrepreneurs. Meet new hires and investors in Los Angeles</div>
const q = <div>Quilt connects women—both online and offline—so you can show up, start talking, and get out of your head. In a digitally-driven world, socializing is self care.</div>
const connect2 = [y, m, s, q]



const Home = (props) => {
    const classes = styles();
    const cards = [1, 2, 3, 4];
    const cardContent = [y, m, s, q]
        
    return (
        <>
        <div className={props.classes.root}> 
        <CssBaseline></CssBaseline>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
        <AvatarGroup>
        <Paper elevation={3} className={classes.paper}></Paper>
        <Typography component='h2' variant='h5'><NavLink exact to='/selfcare' style={{textDecoration: "none", color: "black"}}>SELF-CARE</NavLink></Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Find soothing activities near you to keep you sane</Typography>
        </AvatarGroup>
        {/* Row 1 */}
        <main>      
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={card} xs={14} sm={14} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} 
                    image={selfCare[idx]}
                    title="Self Care"/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
        {/* Row 2 */}
        <main>
        <AvatarGroup>
        <Paper elevation={3} className={classes.paper}></Paper>
        <Typography component='h2' variant='h5'>LEARN</Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Find business workshops and trainings centers near you</Typography>
        </AvatarGroup>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={card} xs={14} sm={14} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} 
                    image={learn[idx]}
                    title="Learn"/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Row 3 */}
      <main>
        <AvatarGroup>
        <Paper elevation={3} className={classes.paper}></Paper>
        <Typography component='h2' variant='h5'>GROW</Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Find local experts to help you launch and scale your company</Typography>
        </AvatarGroup>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={card} xs={14} sm={14} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} 
                    image={grow[idx]}
                    title="Grow"/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Row 4 */}
      <main>
        <AvatarGroup>
        <Paper elevation={3} className={classes.paper}></Paper>
        <Typography component='h2' variant='h5'>CONNECT</Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Meet other entrepreneurs and local organizations.</Typography>
        </AvatarGroup>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={card} xs={14} sm={14} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia} 
                    image={connect[idx]}
                    title="Connect" 
                    />
                    <CardContent className={classes.cardContent}>
                    {/* <Typography gutterBottom 
                    variant="h5" 
                    component="h2"
                    >
                    Heading */}
                    {/* </Typography> */}
                    <Typography>
                    <TextField
                    heading={connect2[idx]}
                    />
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" color="primary" exact to='/winetasting'>
                      Learn More
                    </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </div>
      </>
    );
}

export default withStyles (styles)(Home);