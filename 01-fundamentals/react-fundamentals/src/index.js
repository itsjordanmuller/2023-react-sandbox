import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
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

const Image = () => <h2>Image Placeholder</h2>;
const Title = () => <h2>Title of the Book</h2>;
const Author = () => {
  return <h4>Author</h4>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
