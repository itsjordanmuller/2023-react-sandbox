import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
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
  ></img>
);
const Title = () => (
  <h2>
    How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen
  </h2>
);
const Author = () => {
  return <h4>David Brooks</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
