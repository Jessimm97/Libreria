import React from 'react';
import './acerca-de-nosotros.css';

const AcercaDeNosotros = () => {
  return (
    <div className="acerca-de-nosotros">
      <h1>Acerca de Nosotros</h1>
      <p>
        Bienvenido a nuestra librería. Nos apasiona fomentar la lectura y ofrecer una amplia
        selección de libros para todos los gustos. Nuestro objetivo es proporcionar un servicio
        excepcional y una experiencia única para nuestros clientes.
      </p>
      <h2>Políticas de Renta</h2>
      <ul>
        <li>Los libros rentados deben devolverse en un plazo máximo de 15 días.</li>
        <li>En caso de retraso, se aplicará una multa de $5 por día adicional.</li>
        <li>Los libros deben devolverse en las mismas condiciones en las que fueron rentados.</li>
        <li>En caso de pérdida o daño, se deberá cubrir el costo total del libro.</li>
      </ul>
    </div>
  );
};

export default AcercaDeNosotros;