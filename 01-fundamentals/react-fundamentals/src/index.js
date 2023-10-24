import React from "react";
import ReactDOM from "react-dom/client";

import { books } from "./books";
import Book from "./Book";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
