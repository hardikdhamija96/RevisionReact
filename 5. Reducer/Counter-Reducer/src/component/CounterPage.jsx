import React, { useState } from "react";

const CounterPage = ({initialCount}) => {

    const [count, setCount] = useState(initialCount);
    const increment = 
    () =>{
        setCount(count+1);
    }

    const decrement = 
    () =>{
        setCount(count-1);
    }

  return (
    <div>
      <h2>Current Count: 10</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterPage;
