import React, { useState } from 'react'

const BookCreate = ({handleCreateBook}) => {

    const [title,setTitle] = useState('');

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        handleCreateBook(title);
        setTitle('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Add a Book :</label>
            <input type="text" value={title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    </div>
  )
}

export default BookCreate