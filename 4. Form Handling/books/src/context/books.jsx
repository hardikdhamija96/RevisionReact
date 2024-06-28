import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  };

  const updateTitle = async (str, id) => {
    // setBooks((prevItems) =>
    //   prevItems.map((item) => (item.id === id ? { ...item, title: str } : item))
    // );

    // APPROACH 1: avoid additional network calls

    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: str,
    });
    // fetchBooks();

    // APPROACH 2
    setBooks((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...res.data } : item
      )
    );
  };

  const createBook = async (title) => {
    // setBooks([...books, { id: Math.round(Math.random() * 999999), title }]);

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, response.data]);

    // console.log(response);

    // console.log(response.data);

    // console.log(response.data.title);
  };

  const removeElement = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBookList = books.filter((ele) => ele.id !== id);
    setBooks(updatedBookList);
  };

  const valueToShare = {
    books,
    removeElement,
    createBook,
    fetchBooks,
    updateTitle
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
