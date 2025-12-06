import "./rentados.css";
import { useRentedBooks } from "../../hooks/useRentedBooks";
import React, { useEffect } from "react";

const Rentados = ({ isOpen, onClose }) => {
  const { rentedBooks, removeBook, loadRentedBooks } = useRentedBooks();

  useEffect(() => {
    if (isOpen) {
      loadRentedBooks();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  console.log(rentedBooks);

  return (
    <div className="rentados-modal-overlay">
      <div className="rentados-modal">
        <div className="rentados-modal__content">
          <button className="rentados-modal__close" onClick={onClose}>
            ✖
          </button>
          <h2>Libros Rentados</h2>
          {rentedBooks.length === 0 ? (
            <p>No hay libros rentados.</p>
          ) : (
            <ul className="rentados__list">
              {rentedBooks.map((book) => (
                <li key={book.sku} className="rentados__item">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="rentados__image"
                  />
                  <div className="rentados__details">
                    <h3 className="rentados__title">{book.title}</h3>
                    <p className="rentados__author">{book.author}</p>
                  </div>
                  <button
                    className="rentados__remove-button"
                    onClick={() => removeBook(book.sku)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rentados;

