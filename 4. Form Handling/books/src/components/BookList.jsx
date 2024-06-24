import React, { useEffect, useState } from "react";
import BookShow from "./BookShow";
import './BookList.css'

const BookList = ({ bookList, removeElement ,setBooks, update}) => {

  

  return (
    <div className="BookList">
      <div>
        {bookList.length === 0 ? (
          <div className="bookNotPresentHeading">No Book Present</div>
        ) : (
          <div></div>
        )}
      </div>

        <div className="bookShowContainer">
      {bookList.map((ele) => (
        <BookShow
          key={ele.id}
          title={ele.title}
          remove={removeElement}
          updateName = {update}
          id={ele.id}
        />
      ))}
      </div>
    </div>
  );
};

export default BookList;
