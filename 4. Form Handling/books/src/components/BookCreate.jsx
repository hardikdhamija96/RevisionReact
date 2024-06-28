import React, { useState,useContext } from "react";
import BooksContext from "../context/books";
import "./BookCreate.css";

const BookCreate = () => {
  const {createBook} = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="bookCreate">
      <form className="createForm" onSubmit={handleSubmit}>
        <label className="formHeading">Add a Book :</label>
        <div>
          <input type="text" value={title} onChange={handleChange} />
          <button>Create!</button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
