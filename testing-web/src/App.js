import logo from './logo.svg';
import './App.css';
import Nevbar from './components/Nevbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Nevbar />
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
