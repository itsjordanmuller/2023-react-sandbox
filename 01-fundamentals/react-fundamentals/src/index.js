import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const bookTitle =
  "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen";
const bookAuthor = "David Brooks";
const bookImgSrc = "./images/how-to-know-a-person-cover.jpg";
const bookImgAlt = "How to Know a Person Book Cover Art";

const BookList = () => {
  return (
    <section className="book-list">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={bookImgSrc} alt={bookImgAlt} className="book-img" />
      <h2 className="book-title">{bookTitle}</h2>
      <h4 className="book-author">{bookAuthor}</h4>
      {/* {console.log(props)} */}
      {/* Methods Can Be Used in JSX JavaScript */}
      {/* <h4 className="book-author">{bookAuthor.toUpperCase()}</h4> */}
      {/* Will Compile with Errors, Can't Use Statements */}
      {/* <p>{let x = 6}</p> */}
      {/* Expression Will Work & Show 12 */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

// const Image = () => (
//   <img
//     src="./images/how-to-know-a-person-cover.jpg"
//     alt="How to Know a Person Book Cover Art"
//     className="book-img"
//   />
// );

// const Title = () => (
//   <h2 className="book-title">
//     How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen
//   </h2>
// );

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return (
//     <h4 className="book-author" style={inlineHeadingStyles}>
//       {/* <h4
//       className="book-author"
//       style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
//     > */}
//       David Brooks
//     </h4>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
