import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';


export default function App() {
  const user = {};
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route  path="/signin">
        <IsUserRedirect
          user={user}
          LoggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          LoggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
      </Route>
      <Route exact path="/signup">
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

