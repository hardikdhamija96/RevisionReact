import React from "react";

const BookShow = ({ title, remove, id }) => {
  console.log(`Title is : ${title}`);

  return (
    <div>
      <p>This is Book Show</p>
      <h1>{title}</h1>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}>
              <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
              <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"></path>
            </g>
          </svg>
        </button>

        <div>
          <button
            onClick={() => {
              remove(id);
              console.log(`${title}`);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShow;
