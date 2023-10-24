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
  return (
    <section className="book-list">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("Handle Form Input");
  };
  const handleButtonClick = () => {
    console.log("Handle Button Click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
    </section>
  );
};

const Book = (props) => {
  // console.log(props);
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
