import React, {Component} from 'react';
import {ClickedContext} from '../Extra/Extra'

export default props => {
    // console.log('Counter2: ' + props.clicked)

        return (
            <div style={{
                width: '200px',
                margin: '0 auto'
            }}>
                <ClickedContext.Consumer>
                    {/*{console.log(this.props.clicked)}*/}
                    {/*{clicked => this.props.clicked ? <p>Reset</p> : null}*/}
                    {clicked => clicked ? <p>Reset</p> : null}
                </ClickedContext.Consumer>
            </div>
        )
    }