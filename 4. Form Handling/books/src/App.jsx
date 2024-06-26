import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const updateTitle = (str , id) =>{
    setBooks(
      prevItems => prevItems.map((item) =>
      item.id ===id ? {...item, title:str}: item
      )
    )
  }

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 999999), title }]);
    // setFilteredBookList(books);
  };

  const removeElement = (id) => {
    const updatedBookList = books.filter((ele) => ele.id !== id);
    setBooks(updatedBookList);
  };

  return (
    <div className="app">
      
      <BookCreate handleCreateBook={createBook} />
      <BookList bookList={books} removeElement={removeElement} setBooks={setBooks} update={updateTitle}/>
    </div>
  );
};

export default App;
