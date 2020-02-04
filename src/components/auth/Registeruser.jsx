import React from "react";
import {  useSelector } from "react-redux";
import SignUp from "./signUp";
import ConfirmEmail from "./ConfirmEmail";

const RegisterUser = () => {
  const showConfirmSignUp = useSelector(state => state.auth.showConfirmSignUp);
  console.log(showConfirmSignUp)
  return (
    <div>
      <SignUp />

      {showConfirmSignUp ? <ConfirmEmail /> : null}
    </div>
  );
};


export default RegisterUser