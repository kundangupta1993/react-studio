import logo from './logo.png';
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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  exact path="/about" component={About} />
            <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
