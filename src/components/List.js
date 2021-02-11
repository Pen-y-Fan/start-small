import React from 'react';

class List extends React.Component {
  render() {
    const items = [
      {id: 1, name: "one"},
      {id: 2, name: "two"}
    ];
    return (
      <div>
        <h3>List</h3>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
}

export default List;
