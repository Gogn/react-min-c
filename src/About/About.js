import React from 'react';
import './About.css'

class About extends React.Component {

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/react-min-c/'
    })
  }

  render() {
    return (
        <div style={{
          margin: 'auto',
          paddingTop: '1em',
          textAlign: 'center',
        }}>
          <h1>About Page</h1>
          <hr/>
          <button className={'Btn'} onClick={this.goToHomePage}>Go to Home Page</button>
        </div>
      )
  }
}

export default About