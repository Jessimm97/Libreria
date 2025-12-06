import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer/footer.jsx';
import Inicio from './pages/inicio/index.jsx';
import BookDetail from './pages/book-detail/index.js';
import Rentados from './components/rentados/rentados';
import AcercaDeNosotros from './pages/acerca-de-nosotros/index.jsx';
import TerminosYCondiciones from './pages/terminos-y-condiciones/index.jsx';
import books from './data/books';
import './App.css';

function App() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isRentadosOpen, setIsRentadosOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [rentedBooks, setRentedBooks] = useState(() => {
    return JSON.parse(localStorage.getItem('rentedBooks')) || [];
  });


  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  const resetSearch = () => {
    setFilteredBooks([]);
  };

  const toggleRentados = () => {
    setIsRentadosOpen(!isRentadosOpen);
  };

  const handleRentBook = (book) => {
    if (rentedBooks.find((b) => b.sku === book.sku)) {
      setNotification({ message: `${book.title} ya ha sido rentado.`, type: 'error' });
      setTimeout(() => setNotification(null), 3000); // Oculta la notificación después de 3 segundos
      return;
    }

    const updatedBooks = [...rentedBooks, book];
    setRentedBooks(updatedBooks);
    localStorage.setItem('rentedBooks', JSON.stringify(updatedBooks));
    setNotification({ message: `${book.title} ha sido rentado.`, type: 'success' });
    setTimeout(() => setNotification(null), 3000); // Oculta la notificación después de 3 segundos
  };


  return (
   
     <div className="App">
       <Header
        onSearch={handleSearch}
        onResetSearch={resetSearch}
        onToggleRentados={toggleRentados}
        rentedBooksCount={rentedBooks.length}
      />
       <Router>
      <Routes>
        <Route path="/" element={<Inicio books={filteredBooks.length > 0 ? filteredBooks : books} onRentBook={handleRentBook} />} />
        <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
        <Route path="/book/:sku" element={<BookDetail onRentBook={handleRentBook} />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
      </Routes>
      <Rentados isOpen={isRentadosOpen} onClose={toggleRentados} rentedBooks={rentedBooks} />
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
     
      </Router>
      <Footer />
    
     </div>

  );
}

export default App;
