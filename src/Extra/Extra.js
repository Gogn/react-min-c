import React from "react";
import Counter from "../Counter/Counter";

export const ClickedContext = React.createContext(false)

class Extra extends React.Component {
    state = {
        clicked: this.props.clicked
    };

    componentDidUpdate() {
        if (this.state.clicked !== this.props.clicked) {
            this.setState({
                clicked: this.props.clicked,
            });
        }
    }

    render() {
        console.log('extra: ' + this.state.clicked)
        return (
            <div style={{
                width: 'auto',
                margin: '0 auto',
                border: '1px solid #ccc'
            }}>
                <h2>Extra utils</h2>
                <h3>Change page title</h3>
                <input type="text" onChange={this.props.handleInput}/>

                <hr/>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter
                        // clicked={this.props.clicked}
                        onClicked={this.props.toggleClickedHandler}
                    />
                </ClickedContext.Provider>

            </div>
        )
    }
}

export default Extra;