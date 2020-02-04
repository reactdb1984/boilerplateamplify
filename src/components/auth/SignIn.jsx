import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate';
import { connect } from 'react-redux';

import { signIn } from './authActions'

const actions = {
    signIn
  };

  const validate = combineValidators({
    username: isRequired('username'),
 
    password: isRequired('password')
  }); 

const SignIn = ({handleSubmit, pristine, reset, submitting, signIn }) => {
    return(
        <div>

<form onSubmit={handleSubmit(signIn)}>
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
  )(reduxForm({ form: 'signIn', validate })(SignIn));
  