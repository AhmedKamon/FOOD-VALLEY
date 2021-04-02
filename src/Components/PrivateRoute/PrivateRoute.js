import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userId,setUserId] = useContext(UserContext);
    const {displayName, email} = userId
    console.log(userId.displayName)

    

    return (


        <Route
      {...rest}
      render={({ location }) =>
      userId?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;