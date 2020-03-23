import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Parasite from './pages/Parasite';
import Home from './pages/Home';
import Birdie from './pages/Birdie';
import Spiderman from './pages/Spiderman';
import Joker from './pages/Joker';
import Lighthouse from './pages/Lighthouse';

function App() {
  return (
   <Router>
    <div>
      <h1>Routing App </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/spiderman">Spiderman</Link>
          </li>
          <li>
            <Link to="/lighthouse">Lighthouse</Link>
          </li>
          <li>
            <Link to="/joker">Joker</Link>
          </li>
          <li>
            <Link to="/birdie">Birdie</Link>
          </li>
          <li>
            <Link to="/parasite">Parasite</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/joker" component={Joker} />
      <Route path="/parasite" component={Parasite} />
      <Route path="/lighthouse" component={Lighthouse}/>
      <Route path="/spiderman" component={Spiderman}/>
      <Route path="/birdie" component={Birdie}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
