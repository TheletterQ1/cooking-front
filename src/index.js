import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import { App } from './App.js';
import reportWebVitals from './reportWebVitals';
import { AppState } from './AppState.js';

// import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <AppState>
  <Router>
  {/* <React.StrictMode> */}
    <Route path="/" component={App}/>
  {/* </React.StrictMode> */}
  </Router>
  </AppState>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// serviceWorker.unregister();
