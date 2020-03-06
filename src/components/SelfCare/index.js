import React, { Component } from 'react'
//import { render } from '@testing-library/react'
import { ListItemAvatar, Typography, CssBaseline, withStyles, Paper, TextField } from '@material-ui/core';
import { css } from '@material-ui/system';
import yellow from '@material-ui/core/colors/purple';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import wineTasting from '../Home/Images/2.png';
import paintAndSip from '../Home/Images/3.png';
import plantingClass from '../Home/Images/4.png';
import beachYoga from '../Home/Images/5.png';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Link from '@material-ui/core/Link';
import WineTasting from '../WineTasting'

const selfCare = [wineTasting, paintAndSip, plantingClass, beachYoga];

const SelfCare = (props) => {
    const classes = styles();
    const cards = [1, 2, 3, 4];
    const handleClick = () => {

    };
        return (
            <>
            <div className={props.classes}> 
        <CssBaseline></CssBaseline>
            <main>
            <div className={classes.heroContent}>
            {/* <Container maxWidth="sm"> */}
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            SELF CARE
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Find soothing activities near you to keep you sane
            </Typography>    
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card, idx) => (
                    <Grid item key={card} xs={14} sm={14} md={5}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia} 
                            image={selfCare[idx]}
                            title="Self Care">
                        <Button type="button" 
                                component={Link} 
                                onClick={handleClick}>
                        </Button>
                        </CardMedia>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            </div>
            </main> 
        </div>
        </>
    )  
}; 
    
    
        
export default withStyles (styles)(SelfCare);