import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate';
import { connect } from 'react-redux';

import { confirmSignUp } from './authActions'

const actions = {
    confirmSignUp
  };

  const validate = combineValidators({
    username: isRequired('username'),

    password: isRequired('password')
  }); 

const ConfirmEmail = ({handleSubmit, pristine, reset, submitting, confirmSignUp }) => {
    return(
        <div>

<form onSubmit={handleSubmit(confirmSignUp)}>
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
        <label>userCode</label>
        <div>
          <Field
            name="authCode"
            component="input"
            type="authCode"
            placeholder="authCode"
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
  )(reduxForm({ form: 'registerForm', validate })(ConfirmEmail));
  