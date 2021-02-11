import React, {useState} from "react";
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is a hello world example!</p>
      <HelloWorld/>
      <List/>
      <Counter
        count={count}
      />
      <Button
        name="Increment (+)"
        update={increment}
      />
      <Button
        name="Decrement (-)"
        update={decrement}
      />
    </div>
  );
}

export default App;
