import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Parasite from './pages/Parasite';
import Home from './pages/Home';
import Birdie from './pages/Birdie';
import Spiderman from './pages/Spiderman';
import Joker from './pages/Joker';
import Lighthouse from './pages/Lighthouse';

import movies from "./store/movies";
import Movie from "./pages/Movie";

class App extends Component{
  constructor(){
    super()
    this.state = {
      allMovies: movies
    }
  }
  render(){
    return (
     <Router>
      <div>
        <h1>Routing App </h1>
        <nav>
          <ul>
            { this.state.allMovies.map((movie, index) =>
            <li key={ index }>
              <Link to={ `/movies/${movie.id}` }>
                { movie.name }
              </Link>
           </li>
           )}
          </ul>
        </nav>
        <Switch>
          <Route
            path="/movies/:id"
            render={ (props) => <Movie {...props} movies={ this.state.allMovies } /> }
            />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
