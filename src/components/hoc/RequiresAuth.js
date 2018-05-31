import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.user) {
        this.props.router.push('/auth/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.user) {
        this.props.router.push('/auth/signin');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { user: state.auth.user };
  }

  return connect(mapStateToProps)(Authentication);
}