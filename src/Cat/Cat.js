import React from 'react';
import Radium from "radium";
import './Cat.css'

const Cat = props => {
    const inputClasses = ['input']

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
            cursor: 'pointer'
        }
    }

    if (props.name) {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    // if (props.name.length>4){
    //     inputClasses.push('bold')
    // }

    return (
        <div className="Cat" style={style}>
            <h3>Cat name: {props.name}</h3>
            <p>Born in: {props.born}</p>
            {props.children}
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
                //className="input green bold red"
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Radium(Cat)