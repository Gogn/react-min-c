import React from 'react';

export default class CatDetail extends React.Component {
  render() {

     return (
       <div style={{
         textAlign: 'center'
       }}>
         {console.log(this.props)}
         <h1>{this.props.match.params.name}</h1>
       </div>
     )

  }
}