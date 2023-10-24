import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "David Brooks",
    title:
      "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen",
    img: "/images/how-to-know-a-person-cover.jpg",
    alt: "How to Know a Person Book Cover Art",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    alt: "Atomic Habits Book Cover Art",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});
console.log(newNames);
const BookList = () => {
  return <section className="book-list">{newNames}</section>;
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
