import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import * as birdActions from "./store/birds";
import * as sightingActions from "./store/sightings";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Discover from "./components/Discover";
import Bird from "./components/Bird";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(birdActions.getAll());
    dispatch(sightingActions.getAll());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/discover/:id">
            <Bird />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
