const Book = (props) => {
  const { title, author, img, alt, number } = props;
  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={img} alt={alt} className="book-img" />
      <h2 className="book-title">{title}</h2>
      <h4 className="book-author">{author}</h4>
    </article>
  );
};

export default Book;
