import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOutAction } from 'store/actions/signin';

class Navbar extends Component {

  signout = () => {
    this.props.dispatch(signOutAction())
  }

  navbarLinks() {
    if (this.props.user) {
      return [
        <li key="secret"><Link to="/counter">Secret</Link></li>,
        <li key="signout"><Link to="#" onClick={ this.signout }>Sign out</Link></li>,
        <li key="email">{ this.props.user.email }</li>
      ];
    }
    return [
      <li key="signin"><Link to="/auth/signin">Sign in</Link></li>,
      <li key="signup"><Link to="/auth/register">Sign up</Link></li>,
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/"><span className="brand">Home</span></Link>
          <ul>
            {this.navbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Navbar);
