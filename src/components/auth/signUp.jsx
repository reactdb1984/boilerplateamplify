import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate';
import { connect } from 'react-redux';

import { signUp } from './authActions'

const actions = {
    signUp
  };

  const validate = combineValidators({
    username: isRequired('username'),
    email: isRequired('email'),
    password: isRequired('password')
  }); 

const SignUp = ({handleSubmit, pristine, reset, submitting, signUp }) => {
    return(
        <div>

<form onSubmit={handleSubmit(signUp)}>
      <div>
        <label>user name</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="username"
          />
        </div>
      </div>
      <div>
          
          <label>email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="email"
            />
          </div>
        </div>
      <div>
          
        <label>password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div>
 
       
      </div>
 
  
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
    )
}






  export default connect(
    null,
    actions
  )(reduxForm({ form: 'registerForm', validate })(SignUp));
  