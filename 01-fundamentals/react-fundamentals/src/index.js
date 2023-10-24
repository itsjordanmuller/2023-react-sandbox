import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/516gs6HFZ1L._SY445_SX342_.jpg"
    alt="How to Know a Person Book Cover Art"
    className="img"
  ></img>
);
const Title = () => (
  <h2 className="title">
    How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen
  </h2>
);
const Author = () => {
  return <h4 className="author">David Brooks</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
