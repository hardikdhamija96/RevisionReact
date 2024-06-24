import React, { useEffect, useState } from "react";
import BookShow from "./BookShow";

const BookList = ({ bookList, removeElement }) => {


  return (
    <div>
      <p>This is Book List</p>
      <div>
        {bookList.length === 0 ? (
          <div>No Book Present</div>
        ) : (
          <div></div>
        )}
      </div>

      {bookList.map((ele) => (
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
