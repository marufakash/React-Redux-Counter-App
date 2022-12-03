# React-redux counter example

- install redux and react-redux package
- we will make a counter app; first we will build with state and then we will do this with react-redux. example

```javaScript
// App.js
import React, { useState } from "react";

// state - count:0
// action - increment, decrement, reset
/*
   reducer - handle logic for state update
    count => count + 1
    count => count - 1
    count => 0
   */

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>React Redux Example</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
```