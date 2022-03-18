import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import * as birdActions from "./store/birds";
import * as sightingActions from "./store/sightings";
import * as commentActions from "./store/comments";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Discover from "./components/Discover";
import Bird from "./components/Bird";
import MyBirder from "./components/MyBirder";
import Home from "./components/Home";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(birdActions.getAll());
    dispatch(sightingActions.getAll());
    dispatch(commentActions.getAll()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          {
            !sessionUser &&
            <Redirect to='/' />
          }
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/discover/:id">
            <Bird />
          </Route>
          <Route exact path="/mybirder">
            <MyBirder />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
