import React, {Component} from 'react';
import Radium from "radium";
import Auxiliary from '../hos/Auxiliary'
import Counter2 from '../Counter2/Counter2'
import {rotateIn} from "react-animations";


class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    resetCounter = () => {
        this.setState({
            counter: 0
        })
    };

    render() {
        const styles = {
            Btn_rotateIn: {
                ':active': {
                    animation: '5 0.1s',
                    animationName: Radium.keyframes(rotateIn, 'rotateIn'),
                }
            },
        }

        return (
            <Auxiliary>  {/*Аналогично <Rect.Fragment>, но нужно создавать отдельный файл*/}
                <h2>Counter: {this.state.counter}</h2>
                <Counter2
                    // clicked={this.props.clicked}
                ></Counter2>
                <div>
                    <button className="Btn_counter" onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                    <button className="Btn" style={styles.Btn_rotateIn} onClick={this.resetCounter} /*onClick={this.props.onClicked}*/ >
                        Reset counter
                    </button>
                    <button className="Btn_counter" onClick={this.addCounter}>+</button>

                </div>
            </Auxiliary>
        )
    }

}

export default Radium(Counter);