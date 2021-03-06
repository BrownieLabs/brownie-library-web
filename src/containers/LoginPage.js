import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm';

export class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { login } = this.props.actions;

    return (
      <div>
        <p>LOGIN</p>
        <LoginForm onSubmit={login}/>
        <Link to="sign-up"> Sign up </Link>
      </div>
    );
  }
}

const { object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired
};

const mapState = () => ({});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(LoginPage);
