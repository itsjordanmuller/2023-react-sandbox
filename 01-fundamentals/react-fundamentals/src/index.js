import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title:
      "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen",
    author: "David Brooks",
    img: "/images/how-to-know-a-person-cover.jpg",
    alt: "How to Know a Person Book Cover Art",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "/images/atomic-habits-cover.jpg",
    alt: "Atomic Habits Book Cover Art",
  },
];

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        const { title, author, img, alt } = book;
        return <Book title={title} author={author} img={img} alt={alt} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { title, author, img, alt } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} className="book-img" />
      <h2 className="book-title">{title}</h2>
      <h4 className="book-author">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
