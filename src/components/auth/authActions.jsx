import { Auth } from "aws-amplify";
import {
  SHOW_CONFIRM_SIGNUP,
  LOGIN_USER,
  SIGN_OUT_USER
} from "./AuthConstants";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";

const addUserToDynamoDB = async () => {
    try {
        const id = await Auth.currentAuthenticatedUser().cognitouser.attributes.sub;
        const input = {
          id: "1",
          username: "dace",
          createdAt: "Now"
        };
        await API.graphql(graphqlOperation(createUser, {input} ))
  
    } catch (err) {
      console.log('Error creating user! :', err)
    }
  }



export const Register = user => async dispatch => {
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
    await Auth.signUp(user).then(()=>{
        console.log("user")

       
    })

    dispatch({ type: SHOW_CONFIRM_SIGNUP });


  

    console.log("successful sign up!");
  } catch (err) {
    console.log("error signing up: ", err);
  }
};

export const confirmSignUp = user => async dispatch => {
  const { authCode, username } = user;

  try {
    await Auth.confirmSignUp(username, authCode);

 

    console.log("successfully confirmed sign up!");
    console.log(`this is the current auth user ${Auth.currentSession()}`);

    // more code working with route53 object
    // route53.changeResourceRecordSets();
  } catch (err) {
    console.log("error signing up: ", err);
  }

  try{
    const input = {
        id: "1",
        username: "dace",
        createdAt: "Now"
      };
      await API.graphql(graphqlOperation(createUser, {input} ))

  }catch(err){
console.log(err)
  }
};

export const signIn = user => async dispatch => {
  const { username, password } = user;
  try {
    await Auth.signIn(username, password);
    console.log("successfully signed in!");
    const user = await Auth.currentAuthenticatedUser();
    dispatch({ type: LOGIN_USER, payload: user });
  } catch (err) {
    console.log("error signing in...", err);
  }
};

export const signout = () => async dispatch => {
  try {
    await Auth.signOut();
    dispatch({ type: SIGN_OUT_USER });
  } catch (err) {
    console.log(err);
  }
};
