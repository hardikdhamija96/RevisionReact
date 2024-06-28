import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
import "./App.css";

const App = () => {
  
  const {fetchBooks} = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  

  return (
    <div className="app">
      <BookCreate 
     // handleCreateBook={createBook} 
      />
      <BookList
        // bookList={books}
        // removeElement={removeElement}
        // setBooks={setBooks}
        // update={updateTitle}
      />
    </div>
  );
};

export default App;
