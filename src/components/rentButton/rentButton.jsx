import PropTypes from 'prop-types';
import './rentButton.css';

const RentButton = ({ isRented, handleRentClick }) => {
  return (
    <button
      className={`rent-button ${isRented ? 'rent-button--rented' : ''}`}
      onClick={handleRentClick}
    >
      {isRented ? 'Rentado' : 'Rentar'}
    </button>
  );
};

RentButton.propTypes = {
  isRented: PropTypes.bool.isRequired,
  handleRentClick: PropTypes.func.isRequired,
};

export default RentButton;