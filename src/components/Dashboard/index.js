import React, { Component } from 'react';
//import NewChat from '../NewChat/index';
//import ChatList from '../ChatList/index';
//import ChatView from '../ChatView/index';
//import ChatRoom from '../ChatRoom/index';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import Firebase from '../Firebase/firebase'
import { appendToMemberExpression } from '@babel/types';



class Dashboard extends Component {
  state = {
    
  }

  deleteUser = () => {
    this.props.delete(this.props.match.params.id)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        dashboard
        <Button onClick={this.deleteUser}>DELETE my Account</Button>
      </div>
    )
  }
}

  export default withStyles(styles)(Dashboard);
  
  