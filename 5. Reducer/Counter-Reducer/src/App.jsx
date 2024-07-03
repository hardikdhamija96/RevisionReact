import React from "react";
import { useState, useReducer } from "react";
import "./App.css";
import CounterPage from "./component/CounterPage";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const FORM_VALUE_TO_BE_CHANGED = 'form-value-to-be-changed';

const reducer = 
(state, action) => {
  if(action.type === INCREMENT_COUNT)
    {
      return {
        ...state,
        count: state.count + 1,
        
      };
    }

    if(action.type === DECREMENT_COUNT)
      {
        return {
          ...state,
          count: state.count - 1,
          
        };
      }

    if(action.type === FORM_VALUE_TO_BE_CHANGED)
      {
        return{
          ...state,
          valueToAdd: action.payload
        };
      }

    if(action.type === SET_VALUE_TO_ADD)
      {
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      }

    return state;
}

const App = () => {
  // const [count, setCount] = useState(0);
  // const [valueToAdd, setValueToAdd]=useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 10,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count+1);
    dispatch(
      {
        type: INCREMENT_COUNT,
      }
    );
    console.log(state);
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch(
      {
        type:DECREMENT_COUNT,
      }
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_VALUE_TO_ADD,
    })
    console.log(state);
    
    // setCount(valueToAdd+count);
    // setValueToAdd(0);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    // console.log(typeof val);
    const valInInt = parseInt(val) || 0;

    dispatch({
      type: FORM_VALUE_TO_BE_CHANGED,
      payload: valInInt,
    })
    console.log(state);
    // console.log(valInInt);
    // setValueToAdd(valInInt)
  };

  return (
    <div className="app">
      <div>
        <h2>Current Count: {state.count}</h2>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot</label>
          <input
            type="number"
            value={state.valueToAdd || ""}
            onChange={handleChange}
          />
          <button>Add it!</button>
        </form>
      </div>
    </div>
  );
};

export default App;
