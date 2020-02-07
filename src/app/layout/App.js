import React from "react";
import RegisterUser from "../../components/auth/Registeruser";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../views/HomePage/HomePage";
import { Auth } from "aws-amplify";
import SignIn from "../../components/auth/SignIn";
import NavBar from "../../components/nav";

function App({location}) {
 const result =async ()=>{
  const user = await Auth.currentAuthenticatedUser()
 
  console.log(user.attributes.sub)}
    result()

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <>
          <NavBar/>
          <Switch key={location.key}>
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
          </>
        )}
      />
    </>
  );
}

export default withRouter(App);
