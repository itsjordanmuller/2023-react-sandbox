import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    title:
      "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen",
    author: "David Brooks",
    img: "/images/how-to-know-a-person-cover.jpg",
    alt: "How to Know a Person Book Cover Art",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    img: "/images/atomic-habits-cover.jpg",
    alt: "Atomic Habits Book Cover Art",
  },
];

const BookList = () => {
  const someValue = "Value to Pass Down";
  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Book = (props) => {
  // console.log(props);
  const { title, author, img, alt, displayValue } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} className="book-img" />
      <h2 className="book-title">{title}</h2>
      <button onClick={displayValue}>Click</button>
      <h4 className="book-author">{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
