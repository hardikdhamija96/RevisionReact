import React, { useState } from 'react'

const BookEdit = ({prevTitle,updateName,id,setShowEdit}) => {
  const [title,setTitle] = useState(prevTitle);
  
  const handleChange = (event) =>{
    setTitle(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(`New Title is : ${title}`)
    updateName(title,id);
    setTitle('');
    setShowEdit(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input onChange={handleChange} value={title}/>
        <button>
          Save
        </button>
      </form>
    </div>
  )
}

export default BookEdit