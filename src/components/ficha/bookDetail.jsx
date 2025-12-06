import './bookDetail.css';
import { useNavigate } from 'react-router-dom';
import RentButton from '../rentButton/rentButton';
const BookDetail = ({ book, onRentBook }) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    console.log("Book:", book);
    onRentBook(book);
  };

  return (
    <div className="book-detail">
      <div className="book-detail__image">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="book-detail__info">
        <h1 className="book-detail__title">
          {book.title}
        </h1>
        <ul>
          <li><strong className="book-detail__author">Autor:</strong> {book.author}</li>
          <li><strong className="book-detail__info">Año:</strong> {book.year}</li>
          <li><strong className="book-detail__info">SKU:</strong> {book.sku}</li>
          <li><strong className="book-detail__info">Categoría:</strong> {book.category}</li>
          <li><strong className="book-detail__info">Idioma:</strong> {book.language}</li>
          <li><strong className="book-detail__info">Sinopsis:</strong> {book.synopsis}</li>
        </ul>
         <RentButton isRented={book.isRented} handleRentClick={handleRentClick} />
        <button
          className="book-detail__back-button"
          onClick={() => navigate('/')}
        >
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
};

export default BookDetail;