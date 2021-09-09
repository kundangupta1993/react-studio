import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Link
} from "react-router-dom";

import HomePage from "./home";
import About from "./about"
import NotFound from "./notfound"
import { useState } from 'react';
// import { yellow } from 'jest-matcher-utils/node_modules/chalk';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  exact path="/about" component={About} />
            {/* <Route path='*' exact={true} component={NotFound} /> */}

            <Redirect to="/"/>
            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
