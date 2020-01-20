import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Cat from './Cat/Cat.js';
import Counter from './Counter/Counter.js';
import Radium from "radium";
import {bounce} from 'react-animations';
import Extra from './Extra/Extra';
import About from './About/About'
import Main from './Main/Main.js'
import CatDetail from "./CatDetail/CatDetail"

class App extends Component {

  state = {
    isLoggenIn: false
  }

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
          <div className={'auth'}>
            <h3>Is logged in: {this.state.isLoggenIn ? 'TRUE' : 'FALSE'}</h3>
            <button onClick={() => this.setState({isLoggenIn: !this.state.isLoggenIn})}>Login</button>
          </div>
          </nav>
        </div>

        <Switch>
          <Route path="/react-min-c/" exact
                 render={() => <h2 style={{textAlign: "center"}}>Простая демонстрация роутинга. Основной контент на странице <NavLink
                   to="/react-min-c/cats">Cats</NavLink></h2>}/>
          {/*//Рендеринг страница About только для авторизованных*/}
          { this.state.isLoggenIn ? <Route path="/react-min-c/about" component={About}/> : null }
          <Route path="/react-min-c/catdetail/:name" component={CatDetail}/>
          <Route path="/react-min-c/cats" component={Main}/>
          {/*<Redirect to={'/react-min-c/'}/>*/}
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>
        </Switch>

      </React.Fragment>
    );
  }
}

export default Radium(App);
