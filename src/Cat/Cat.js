import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cat.module.css';
import withClass from '../hos/withClass';
import {withRouter} from 'react-router-dom'

class Cat extends React.Component {

  render() {
//console.log(this.props)

    const inputClasses = [classes.input]

    if (this.props.name) {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    } else {
    }

    return (
      <div
        className={'Cat'}
        onClick={() => this.props.history.push('/react-min-c/catslist/' + this.props.name.toLowerCase())} // Отправка имени в урл для передачи в компонент CatDetail и отображения карточки
      >
        <h3>Cat name: {this.props.name}</h3>
        <p>Born in: {this.props.born}</p>
        {this.props.children}
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
          //className="input green bold red"
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  born: PropTypes.number.isRequired,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withRouter(withClass(Cat, classes.Cat))