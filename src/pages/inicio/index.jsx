import React from 'react';
import Card from '../../components/card/card.jsx';
import Categories from '../../components/categories/Categories.jsx';
import './inicio.css'; 

const Inicio = ({ books, onRentBook = [] }) => {
  const [filteredBooks, setFilteredBooks] = React.useState(books);

  React.useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleCategorySelect = (category) => {
    const filtered = books.filter((book) => book.category === category);
    setFilteredBooks(filtered);
  };
  const categories = ["Novela", "Clásico", "Distopía", "Fábula", "Romance", "Fantasía",  "Terror"];
  return (
    <div className="inicio">
      <h1>Bienvenido a la Librería</h1>
      <Categories categories={categories} onSelectCategory={handleCategorySelect} />
      <div className="inicio__grid">
        {filteredBooks.map((book) => (
          <Card key={book.sku} book={book} onRentBook={onRentBook} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;