import { Link } from "react-router-dom";
import "./card.css";
import RentButton from "../rentButton/rentButton";
const Card = ({ book, onRentBook }) => {
  const handleRentBook = () => {
    onRentBook(book);
  };

  return (
    <div className="card">
      <img src={book.img} alt={book.title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{book.title}</h2>
        <p className="card__author">Por: {book.author}</p>
        <div className="card__button-container">
          <Link to={`/book/${book.sku}`} className="card__button">
            Ver más
          </Link>
          <RentButton
            isRented={book.isRented}
            handleRentClick={handleRentBook}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
