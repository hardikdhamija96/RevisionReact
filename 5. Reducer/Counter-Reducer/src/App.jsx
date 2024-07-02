import React from 'react'
import { useState } from 'react'
import './App.css'
import CounterPage from './component/CounterPage'

const App = () => {

  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd]=useState(0);
    const increment = 
    () =>{
        setCount(count+1);
    }

    const decrement = 
    () =>{
        setCount(count-1);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setCount(valueToAdd+count);
    }

    const handleChange = (e) =>{
      const val = e.target.value;
      // console.log(typeof val);
      const valInInt = parseInt(val)||0;
      // console.log(valInInt);
      setValueToAdd(valInInt)
    }

  return (
    <div className='app'>
      <div>
      <h2>Current Count: {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label >
            Add a lot 
          </label>
          <input type="number" value = {valueToAdd||""} onChange={handleChange}/>
          <button>Add it!</button>
        </form>
      </div>
    </div>
  )
}

export default App
