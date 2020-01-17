import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Main.css';
import Cat from '../Cat/Cat.js';
import Counter from '../Counter/Counter.js';
import Radium from "radium";
import {bounce} from 'react-animations';
import Extra from '../Extra/Extra';

class App extends Component {

  state = {
    clicked: false,
    cats: [
      {name: 'Барсик', born: 2018},
      {name: 'Рыжик', born: 2016}
    ],
    pageTitle: 'The cats app',
    showCats: false,
    showExtra: false,
    newcat: {name: 'Your cat name', born: 2020}
  };

  toggleCatsHandler = () => {
    this.setState({
      showCats: !this.state.showCats
    })
  };

  toggleExtraHandler = () => {
    this.setState({
      showExtra: !this.state.showExtra
    })
  };

  toggleClickedHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log('app: ' + this.state.clicked)
  };

  handleInput = (event) => {
    this.setState({
      pageTitle: event  //Нужно разобраться почему работает такая запись, а не event.target.value
    })
    console.log(this.state.pageTitle)
  };

  onChangeName(name, index) {
    console.log(name, index)
    const cat = this.state.cats[index]
    cat.name = name
    const cats = [...this.state.cats]  //Создание клона массива, так как напрямую его нельзя менять
    cats[index] = cat
    this.setState({
      cats //cats: cats (Эквивалентная запись)
    })
  }

  deleteHandler(index) {
    const cats = this.state.cats.concat() // Копия массива
    cats.splice(index, 1)
    this.setState({cats})
  }

  handleInputAdd = event => {
    this.setState({
      newcat: {name: event.target.value, born: 2020}
    })
  }

  addHandler = () => {
    this.setState(({cats, newcat}) => ({
        cats: [
          ...cats,
          newcat
        ],
        newcat: {name: 'Your cat name', born: 2020}
      })
    )
  }


  render() {
    const styles = {
      h1: {
        ':hover': {
          animation: '5 1s',
          animationName: Radium.keyframes(bounce, 'bounce'),
        }
      },
    }


    let cats = null
    if (this.state.showCats) {
      cats = this.state.cats.map((cat, index) => {
        return (
          <Cat
            key={index}
            name={cat.name}
            born={cat.born}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={event => this.deleteHandler(event.target.value, index)}
          />
        )
      })
    }

    let extra = null
    if (this.state.showExtra) {
      extra = <Extra
        clicked={this.state.clicked}
        handleInput={event => this.handleInput(event.target.value)}
        toggleClickedHandler={event => this.toggleClickedHandler()}
      />
    }


    return (
      <React.Fragment>

        <div className='App'>
          <h1 className="h1" style={styles.h1}>{this.state.pageTitle}</h1>
          <button className="Btn" onClick={this.toggleExtraHandler}>
            Show Extras
          </button>
          <br/>

          <div className="extra">
            {extra}
          </div>

          <button className="Btn" onClick={this.toggleCatsHandler}>
            Show All Cats!
          </button>

          <br/>

          <div className="AddCat">
            <input
              className="input"
              type="text"
              onChange={this.handleInputAdd}
              defaultValue='Your cat name'
            />
            <button className="Btn" onClick={this.addHandler}>Add a new cat</button>
          </div>

          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: 20,
          }}>
            {cats}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Radium(App);
