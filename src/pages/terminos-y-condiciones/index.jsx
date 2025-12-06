
import "./terminos.css";

const TerminosYCondiciones = () => {
  return (
    <div className="terminos">
      <h1 className="terminos__title">Términos y Condiciones</h1>
      <p className="terminos__text">
        Bienvenido a nuestra biblioteca virtual. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones:
      </p>
      <ul className="terminos__list">
        <li>El contenido de esta biblioteca es solo para uso personal y educativo.</li>
        <li>No está permitido redistribuir o vender el contenido sin autorización.</li>
        <li>Nos reservamos el derecho de modificar estos términos en cualquier momento.</li>
      </ul>
      <p className="terminos__text">
        Si tienes alguna pregunta, no dudes en contactarnos a través de nuestra página de contacto.
      </p>
    </div>
  );
};

export default TerminosYCondiciones;