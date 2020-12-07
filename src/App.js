/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Nav from "./components/Navigation/Nav.js";
import { useAppState } from "./AppState.js";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/About";
import PoliciesPage from "./pages/Policies"
import PrivateEvents from "./pages/Events"
import Classes from "./pages/Classes"
import TeamBuilding from "./pages/TeamBuilding"

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
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={AboutPage} />
        <Route path="/policies" component={PoliciesPage} />
        <Route path="/private_events" component={PrivateEvents} />
        <Route path="/classes" component={Classes} />
        <Route path="/team_building" component={TeamBuilding} />
      </Switch>
      <Footer />
      </>
   
  );
};
