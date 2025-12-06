import { useState, useEffect } from "react";

export const useRentedBooks = () => {
  const [rentedBooks, setRentedBooks] = useState([]);

  const loadRentedBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem("rentedBooks")) || [];
    setRentedBooks(storedBooks);
  };

  useEffect(() => {
    loadRentedBooks();
  }, []);

  const removeBook = (sku) => {
    const updatedBooks = rentedBooks.filter((book) => book.sku !== sku);
    localStorage.setItem("rentedBooks", JSON.stringify(updatedBooks));
    window.location.reload();
  };

  const addBook = (book) => {
    const updatedBooks = rentedBooks.some((b) => b.sku === book.sku)
      ? rentedBooks
      : [...rentedBooks, book];
    localStorage.setItem("rentedBooks", JSON.stringify(updatedBooks));
    window.location.reload();
  };

  return { rentedBooks, removeBook, addBook, loadRentedBooks };
};