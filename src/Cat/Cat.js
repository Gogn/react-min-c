import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cat.module.css';
import withClass from '../hos/withClass';

class Cat extends React.Component {

  render() {

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
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  born: PropTypes.number.isRequired,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withClass(Cat, classes.Cat)