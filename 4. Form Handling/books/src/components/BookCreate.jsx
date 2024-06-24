import React, { useState } from "react";
import "./BookCreate.css";

const BookCreate = ({ handleCreateBook }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
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
