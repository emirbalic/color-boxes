import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';
class Box extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let nextColor;
    do {
      nextColor = choice(this.props.colors);
    } while (nextColor === this.state.color);
    this.setState({ color: nextColor });
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
