import React from "react";
import { useState } from "react";

const SearchBar = ({onSubmit}) => {

    const [term,setTerm] = useState('');

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        
        onSubmit(term);
    }

    const handleChange = (event) =>{
        console.log(event.target.value);
        setTerm(event.target.value)
    };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={term} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default SearchBar;
