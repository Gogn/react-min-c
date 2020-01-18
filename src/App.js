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
          <nav className="nav">
            <ul>
              <li>
                <NavLink
                  exact
                  to="/react-min-c/"
                  activeClassName="active"
                >Home</NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/react-min-c/cats"
                  // activeStyle={{color: 'blue'}} // inline
                >Cats</NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={{
                    pathname: '/react-min-c/about',
                    // search: '?a=1&b=2',
                    // hash: 'active-hash'
                  }}
                >About</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Route path="/react-min-c/" exact render={() => <h2>Простая демонстрация роутинга. Основной контент -- на странице <NavLink to="/cats">Cats</NavLink></h2>} />
        <Route path="/react-min-c/about" component={About} />
        <Route path="/react-min-c/cats" component={Main} />
      </React.Fragment>
    );
  }
}

export default Radium(App);
