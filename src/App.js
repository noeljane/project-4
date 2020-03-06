import React, { Component } from 'react';
import Firebase from './components/Firebase/firebase';
import { Switch, Route, Redirect, withRouter }  from 'react-router-dom';
import Home from './components/Home/index';
import LogIn from '../src/components/LogIn/index';
import Join from './components/Join/index'
import NavBar from '../src/components/NavBar/index';
import SelfCare from './components/SelfCare';
import WineTasting from './components/WineTasting'

const My404 = () => {
  return(
    <div>
      <Redirect to='/' />
    </div>
  )
};

class App extends Component {
  state = {
    name: null,
    isLogged: false,
    id: null
  }

  join = (email, password, name) => {
    Firebase
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(authRes => {
        console.log(authRes, 'THIS IS AUTH RES')
        const user = {
            email: authRes.user.email
        };
    Firebase
      .database
      .collection('users')
      .doc(authRes.user.uid)
      .set({
        name,
        password,
        email
      })
      .then(() => {
          this.props.history.push(`/dashboard/${authRes.user.uid}`)
      }, dbError => {
          console.log(dbError);
          this.setState({ joinError: 'FFFF fail' });
      })
      this.setState({
        name: name,
        isLogged: true,
        id: authRes.user.uid
      })
      this.props.history.push(`/dashboard/${authRes.user.uid}`)
    }, authError => {
        console.log(authError);
        this.setState({ joinError: 'Failed to add user' });
    })
  }

  logIn = (name, email, password) => {
    Firebase
    .signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log(authUser.user.uid, 'this is authuser')
      this.setState({
        name: name,
        isLogged: true,
        id: authUser.user.uid
      })
      this.props.history.push(`/dashboard/${authUser.user.uid}`)
    })
    .catch(error => {
        this.setState({
            logInError: 'Wrong email or password'
        })
        console.log(error)
    })
  }

  logOut = async () => {
    try {
      await Firebase.logOut();
      //doSetCurrentUser(null);
      this.props.history.push('/')
      this.setState({
        name: null,
        isLogged: false
      })
    } catch (error) {
      console.log(error);
    }
  };

  delete = (id) => {
    Firebase
    .database
    .collection('users')
    .doc(id)
    .delete()
    .then(() => {
      console.log('deleted')
      this.props.history.push('/')
      this.setState({
        name: null,
        isLogged: false,
        uid: null
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state, 'this is state')
    return (
    <div>
      <NavBar />
      <Switch>
      {/* {
        this.state.isLogged
        ?
        <Route exact path='/dashboard/:id' render={(props) => <Dashboard  delete={this.delete} {...props} />} />
      : 
      null
      } */}
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/login' render={(props) => <LogIn logIn={this.logIn}  {...props} />} />
        <Route exact path='/join' render={(props) => <Join join={this.join} {...props} />} />
        <Route exact path='/selfcare' render={(props) => <SelfCare {...props} />} />
        <Route exact path='/selfcare/winetasting' render={(props) => <WineTasting{...props} />} />
        <Route component={ My404 } />
      </Switch>
    </div>
  );
  }
}



export default withRouter(App);
