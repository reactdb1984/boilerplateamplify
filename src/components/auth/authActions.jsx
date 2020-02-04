import { Auth } from "aws-amplify";
import { SHOW_CONFIRM_SIGNUP, LOGIN_USER } from './AuthConstants'

export const signUp = user => async dispatch => {
  const { username, password, email } = user;

  try {
    const user = {
      username,
      password,
      attributes: {
        email
      }
    };
    console.log(user);
    await Auth.signUp(user);
   
    console.log("successful sign up!");
    dispatch({ type: SHOW_CONFIRM_SIGNUP });
  } catch (err) {
    console.log("error signing up: ", err);
  }
};

export const confirmSignUp = user => async dispatch => {
  const { authCode, username } = user;
  try {
    await Auth.confirmSignUp(username, authCode);
    console.log("successfully confirmed sign up!");
    console.log(`this is the current auth user ${Auth.currentSession()}`)
        
            // more code working with route53 object
            // route53.changeResourceRecordSets();
        
        
      
  } catch (err) {
    console.log("error signing up: ", err);
  }
};

export const signIn = user => async dispatch => {
    const {
      username, password
    } = user
    try {
      await Auth.signIn(username, password)
      console.log('successfully signed in!')
      const user = await Auth.currentAuthenticatedUser()
      dispatch({type: LOGIN_USER, payload: user  })
    } catch (err) {
      console.log('error signing in...', err)
    }
  }
