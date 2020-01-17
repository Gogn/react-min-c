import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Cat from './Cat/Cat.js';
import Counter from './Counter/Counter.js';
import Radium from "radium";
import {bounce} from 'react-animations';
import Extra from './Extra/Extra';
import About from './About/About'
import Main from './Main/Main.js'

class App extends Component {

  render() {

    return (
      <React.Fragment>

        <div>
          <nav className={"nav"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cats">Cats</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Route path="/" exact render={() => <h2>Простая демонстрация роутинга. Основной контент -- на странице <NavLink to="/cats">Cats</NavLink></h2>} />
        <Route path="/about" component={About} />
        <Route path="/cats" component={Main} />
      </React.Fragment>
    );
  }
}

export default Radium(App);
