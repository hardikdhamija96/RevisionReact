import React from 'react'
import BookShow from './BookShow'

const BookList = ({bookList}) => {
  console.log(bookList)
  return (
    <div>
      <p>This is Book List</p>
      {
        bookList.map((ele)=>(
          <BookShow key={ele.id} title={ele.title}/>
        ))
      }
    </div>
  )
}

export default BookList