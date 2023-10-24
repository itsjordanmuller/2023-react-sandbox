const Book = (props) => {
  const { title, author, img, alt } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} className="book-img" />
      <h2 className="book-title">{title}</h2>
      <h4 className="book-author">{author}</h4>
    </article>
  );
};

export default Book;
