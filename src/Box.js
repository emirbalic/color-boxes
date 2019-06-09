import React, { Component } from 'react';
import {choice} from './helpers';
import './Box.css';
class Box extends Component {
  static defaultProps = {
    allColors: [
      'purple', 'magenta', 'wheat', 'pink', 'violet'
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors) 
    };
    this.handleClick = this.handleClick.bind(this);
  };
  pickColor() {
    let nextColor;
    do{

      nextColor = choice(this.props.allColors);
    } while (nextColor === this.state.color);
    this.setState({color: nextColor})
  }
  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
}
}

export default Box;
