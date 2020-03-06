import React from 'react';
import Firebase from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
//import ErrorBoundary from './components/ErrorBoundary'

//const firebase = require("firebase");


class Join extends React.Component {
    constructor() {
    super()    
    this.state = {
            username: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            //isAuth: false,
            joinError: '',
          };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    };

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    };

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    };

    handleChangePasswordConfirmation(e) {
    this.setState({passwordConfirmation: e.target.value});
    };

    handleSubmit(e) {
        e.preventDefault();

        if(!this.formIsValid()) {
            this.setState({ joinError: 'Passwords do not match' });
            return;
            
        };
        this.props.join(this.state.email,this.state.password, this.state.username)
    
    };

    render() {
        const { classes } = this.props;

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                <Typography component='h1' 
                variant='h5'>
                Join!
                </Typography>
                <form onSubmit={(e) => this.handleSubmit(e)} 
                className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='join-username-input'>Create Your Username</InputLabel>
                            <Input autoComplete='username' 
                            username={this.state.value} onChange={this.handleChangeUsername}
                            autoFocus id='join-username-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='join-email-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' email={this.state.value} onChange={this.handleChangeEmail}
                            //onChange={(e) => this.userTyping('email', e)} 
                            autoFocus id='join-email-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='join-password-input'>Create A Password</InputLabel>
                        <Input type='password' 
                        password={this.state.value} onChange={this.handleChangePassword} autoFocus id='join-password-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='join-password-confirmation-input'>Confirm Your Password</InputLabel>
                        <Input type='password' password={this.state.value} onChange={this.handleChangePasswordConfirmation} autoFocus id='join-password-confirmation-input'></Input>
                    </FormControl>
                    <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration and updates via email to keep me sane and on-track."
              />
                    <Button type='submit' fullWidth variant='contained' color='#ffeb3b' className={classes.submit}>SUBMIT</Button>
                </form>
                {
                    this.state.joinError ? 
                    <Typography className={classes.errorText} 
                    component='h5' 
                    variant='h6'>
                     {this.state.joinError}  
                    </Typography> : null
                }
                <Link className={classes.logInLink} to='/login'>Already Have An Account? Log In!</Link>
                </Paper>
            </main>
        );
    } 
}

export default withStyles(styles)(Join);