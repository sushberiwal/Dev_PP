import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component:Component,...remainingProps }) => {
  // map state to props
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ props }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to="/"
          />
        )
      }
    />
  );
};
export default PrivateRoute;