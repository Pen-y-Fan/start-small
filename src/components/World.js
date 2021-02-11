import React from 'react';

class World extends React.Component {
  render() {
    const name = this.props.name;
    return (
      name ? <span>{name}</span> : <span>World</span>
    )
  }
}

export default World;
