import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books.js';
import BookDetails from '../../components/ficha/bookDetail.jsx';
const BookDetail = ({onRentBook}) => {
  const { sku } = useParams();
  const book = books.find((b) => b.sku === sku);

  if (!book) {
    return <div>Libro no encontrado</div>;
  }


  return (
    <div className="contentBook-detail">
        <BookDetails book={book} onRentBook={onRentBook} />
    </div>
  );
};

export default BookDetail;