import React from 'react';
import Hello from "./Hello";
import World from "./World";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <Hello/>&nbsp;<World name="Fred"/>
        </h2>
      </div>
    )
  }
}

export default HelloWorld
