import React, { useContext, useEffect, useState } from "react";
import BookShow from "./BookShow";
import './BookList.css'
import BooksContext from "../context/books.jsx";

const BookList = () => {

  const {books,removeElement,updateTitle} = useContext(BooksContext);

  return (
    <div className="BookList">
      
      <div>
        {books.length === 0 ? (
          <div className="bookNotPresentHeading">No Book Present</div>
        ) : (
          <div></div>
        )}
      </div>

        <div className="bookShowContainer">
      {books.map((ele) => (
        <BookShow
          key={ele.id}
          title={ele.title}
          remove={removeElement}
          updateName = {updateTitle}
          id={ele.id}
        />
      ))}
      </div>
    </div>
  );
};

export default BookList;
