import React from 'react';

export default class CatDetail extends React.Component {
  render() {

     return (
       <div style={{
         textAlign: 'center'
       }}>
         <div>
         <h1>Cat name: {this.props.match.params.name}</h1>
         {/*<h2>Born in: {this.props.match.params.born}</h2>*/}
       </div>
       </div>
     )

  }
}