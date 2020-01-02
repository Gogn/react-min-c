import React from 'react';
import Radium from "radium";
import './Cat.css'

const Cat = props => {
    const inputClasses = ['input']

    const style = {
        border: '1px solid #ccc',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
            cursor: 'pointer'
        }
    }


    return (
        <div className="Cat" style={style}>
            <h2>Add a cat</h2>
            <h3>Cat name: {props.name}</h3>
            <p>Born in: {props.born}</p>
            <input
                type="text"
                onChange={props.handleInputAdd}
                onKeyPress={props.handleInputAdd}
                value={'asd123'}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onAdd}>Add</button>
        </div>
    )
}

export default Radium(Cat)