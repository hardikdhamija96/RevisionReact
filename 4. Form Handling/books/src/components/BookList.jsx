import React, { useEffect, useState } from "react";
import BookShow from "./BookShow";

const BookList = ({ bookList }) => {
  console.log(bookList);

  const [filteredBookList, setFilteredBookList] = useState(bookList);

  useEffect(()=>{
    setFilteredBookList(bookList);
  },[bookList])

  const removeElement = (id) => {
    const updatedBookList = filteredBookList.filter((ele) => ele.id !== id);
    setFilteredBookList(updatedBookList);
  };

  return (
    <div>
      <p>This is Book List</p>
      {filteredBookList.map((ele) => (
        <BookShow
          key={ele.id}
          title={ele.title}
          remove={removeElement}
          id={ele.id}
        />
      ))}
    </div>
  );
};

export default BookList;
