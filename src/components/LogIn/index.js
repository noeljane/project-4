import React from 'react';
import Firebase from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';


class LogIn extends React.Component {
    constructor() {
        super()    
        this.state = {
                username: null,
                email: null,
                password: null,
                //isAuth: false,
                logInError: '',
              };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        };
          
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
        this.props.logIn(this.state.username, this.state.email, this.state.password)
        //this.setState({ logInError: 'Passwords do not match' });
    };
           
    render() {
        const { classes } = this.props;

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                   <Typography component='h1' variant='h5'>
                       Log In!
                   </Typography>
                   <form className={classes.form} onSubmit={(e) => this.handleSubmit(e)}>
                   <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-username-input'>Enter Your Username</InputLabel>
                            <Input autoComplete='username' 
                            username={this.state.value} onChange={this.handleChangeUsername}
                            autoFocus id='login-username-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-username-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' 
                            email={this.state.value} onChange={this.handleChangeEmail}
                            autoFocus id='login-email-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                            <Input type='password' 
                            email={this.state.value} 
                            onChange={this.handleChangePassword}
                            autoFocus id='login-password-input'>
                            </Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='#ffeb3b' className={classes.submit}>Log In</Button>
                    {this.state.logInError}
                </form>
                <Link className={classes.joinLink} to='/join'>Don't Have An Account? Join Here!</Link>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(LogIn);