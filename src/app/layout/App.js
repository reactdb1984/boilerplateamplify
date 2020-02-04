import React from "react";
import RegisterUser from "../../components/auth/Registeruser";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../views/HomePage/HomePage";
import { Auth } from "aws-amplify";
import SignIn from "../../components/auth/SignIn";

function App({location}) {
  Auth.currentAuthenticatedUser()
 
    .then(data => console.log(data))
    .catch(err => console.log(err));

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <Switch key={location.key}>
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        )}
      />
    </>
  );
}

export default withRouter(App);
