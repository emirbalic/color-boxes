import React, { Component } from 'react'
import Box from './Box';  
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numberBoxes: 18,
    allColors: ['purple', 'magenta', 'wheat', 'pink', 'violet']

  }
  render() {
    const boxes = Array.from({length: this.props.numberBoxes}).map(()=> (
      <Box colors={this.props.allColors}/>
    ));
    return (
      <div className='BoxContainer'>{boxes}</div>
    );
  }
}

export default BoxContainer;