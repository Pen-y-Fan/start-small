import React from 'react';

class Counter extends React.Component {
  render() {
    const count = this.props.count;
    return (
      <h3>Counter: {count}</h3>
    )
  }
}

export default Counter;
