import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { registerAction } from 'store/actions/register';
import { connect } from 'react-redux';

class Register extends Component {

  submit = (values) => {
    this.props.registerAction(values, this.props.router)
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Register New Account</h2>
          <form onSubmit={ handleSubmit(this.submit) }>
            <div>
              <label>Name</label>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Full Name" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
              <Field name="password"
                  component="input"
                  type="password"
                  placeholder="Password" />
              </div>
            </div>
            <div>
              <label>Password Confirmation</label>
              <div>
              <Field name="password_confirmation"
                  component="input"
                  type="password"
                  placeholder="Re-type Password" />
              </div>
            </div>
            <button type="submit" className="blue">Sign In</button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormRegister = reduxForm({
  form: 'register'
})(Register);

export default connect(mapStateToProps, {registerAction})(reduxFormRegister);
