import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Creado por: Jessica Mondragón</p>
        <div className="footer__links">
          <a href="/acerca-de-nosotros" className="footer__link">
            Acerca de Nosotros
          </a>
          
          <a href="/terminos-y-condiciones" className="footer__link">
            Términos y Condiciones
          </a>
        </div>
        <p className="footer__copyright">&copy; 2025 Biblioteca Virtual. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
