import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    console.log()
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  //  {console.log(genMatrix)}
  


  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

