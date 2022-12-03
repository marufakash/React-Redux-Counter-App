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

- now we will make the same counter app using react-redux

```JavaScript
// step 1: create constants
//services/constants/counterConstants.js
    export const INCREMENT = "INCREMENT";
    export const RESET = "RESET";
    export const DECREMENT = "DECREMENT";

// step 2: create actions
//services/actions/counterActions.js
// action - increment, decrement, reset

import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConsant";

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const resetCounter = () => {
    return {
        type: RESET
    }
}

// step 3: create reducers
//services/reducers/counterReducer.js
/*
    reducer - handle logic for state update
    count => count + 1
    count => count - 1
    count => 0
*/

import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConsant";

const initialCounter = {
    count: 0,
}

const counterReducer = (state = initialCounter, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }
}

export default counterReducer;

// step 4: create store
// npm install redux
// src/store.js

import { createStore } from 'redux';
import counterReducer from './Services/reducers/counterReducer';

const store = createStore(counterReducer);

export default store;

// step 5: provide store in index.js
// npm install react-redux

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// step 6: use store in anywhere in your app. for example in Counter.js

import React from "react";
import style from './counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from "../Services/actions/CounterAction";


const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div className={style.card}>
            <h1 className={style.heading}>Counter App</h1>
            <h1 className={style.count}>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>0</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter;

// create actions & constants
// create reducers
// create & provide store
// useSelector, useDispatch
```