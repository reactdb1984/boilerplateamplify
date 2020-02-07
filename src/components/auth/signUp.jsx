import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";

import { combineValidators, isRequired } from "revalidate";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";

import { Register } from "./authActions";

const validate = combineValidators({
  username: isRequired("username"),
  email: isRequired("email"),
  password: isRequired("password")
});

const SignUp = ({ handleSubmit, pristine, reset, submitting, signUp }) => {
  const dispatch = useDispatch();
  const handleFormSubmit = async user => {
    try {
      dispatch(Register(user));

      const input = {
        id: "1",
        username: "dace",
        createdAt: "Now"
      };
      await API.graphql(graphqlOperation(createUser, { input }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
        <div></div>

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: "registerForm", validate })(SignUp);
