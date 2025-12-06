import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "./header.css";

const Header = ({ onSearch, onResetSearch, onToggleRentados, rentedBooksCount }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    onResetSearch();
  };

  return (
    <header className="header">
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="header__search-button" onClick={handleSearch}>
          Buscar
        </button>
        <button className="header__reset-button" onClick={handleReset}>
          Restaurar
        </button>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
           <li className="header__item">
            <a className="header__link" href="/">
              Inicio
            </a>
          </li>
           <li className="header__item">
            <a className="header__link" href="/acerca-de-nosotros">
              Acerca de Nosotros
            </a>
          </li>
          <li className="header__item">
            <button className="header__link" onClick={onToggleRentados}>
              <FaShoppingBasket size={20} />
              {rentedBooksCount > 0 && <span className="header__basket-count">{rentedBooksCount}</span>}
            </button>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
