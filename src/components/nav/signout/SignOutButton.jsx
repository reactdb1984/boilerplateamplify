import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signout } from "../../auth/authActions";

const SignOutButton = ({ history }) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    dispatch(signout());
  };
  return (
    <div>
      <button onClick={handleSignOut} />
    </div>
  );
};

export default withRouter(SignOutButton);
