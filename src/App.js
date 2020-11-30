import React, { useState, useEffect, useContext, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Nav from "./components/Nav.js";
import { useAppState } from "./AppState.js";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/About/About";
import PoliciesPage from "./components/Policies/Policies"


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
      
      <Header />
      <Route path="/" component={Nav}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={AboutPage} />
        <Route path="/policies" component={PoliciesPage} />
      </Switch>
      <Footer />
      </>
   
  );
};
