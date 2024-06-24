import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 999999), title }]);
  };

  return (
    <div>
      <BookList bookList={books} />
      <BookCreate handleCreateBook={createBook} />
    </div>
  );
};

export default App;
