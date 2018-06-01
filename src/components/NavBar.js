import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOutAction } from 'store/actions/signin';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import KeyIcon from '@material-ui/icons/VpnKey';
import ExitIcon from '@material-ui/icons/ExitToApp';

class Navbar extends Component {
  signout = () => {
    this.props.dispatch(signOutAction())
  }

  authDisplay() {
    if (this.props.user) {
      return (
        <span>{this.props.user.email}</span>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ textAlign: "center" }}>{this.authDisplay()}</div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/auth">
            <ListItem button>
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Auth" />
            </ListItem>
          </Link>
          <Divider />
          {this.props.user ? (
            <ListItem button onClick={this.signout}>
              <ListItemIcon>
                <ExitIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : null}
        </List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Navbar);
