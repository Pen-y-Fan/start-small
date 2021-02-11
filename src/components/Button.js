import React from 'react';

class Button extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <button onClick={(e) => this.handleClick(e)}>{name}</button>
    )
  }

  handleClick(e) {
    e.preventDefault();
    this.props.update();
  }
}

export default Button
