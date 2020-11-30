import React, { useState, useEffect, useContext, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Auth from "./components/Auth.js";
import Dashboard from "./components/Dashboard.js";
import Nav from "./components/Nav.js";
import { useAppState } from "./AppState.js";
import "./App.css";

export const App = (props) => {
  const { state, dispatch } = useAppState();

  useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    if (auth) {
      dispatch({ type: "auth", payload: auth });
        props.history.push("/dashboard");
    } else {
     props.history.push("/");
    }
  }, []);

  return (
    <>
      {" "}
      <Route path="/" component={Nav}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <h1></h1>
    </>
  );
};
