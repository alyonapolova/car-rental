import { useSelector } from 'react-redux';
import { carSelector } from '../redux/selectors';
import { Backdrop, ModalStyled } from './styles/Modal.styled';

export const Modal = ({ isModal, onClose }) => {
  const cardInfo = useSelector(carSelector);

  if (!isModal) return null;
  console.log(isModal);
  return (
    <Backdrop isModal={isModal}>
      <ModalStyled isModal={isModal}>
        <button type="button" onClick={() => onClose()}>
          &#9421;
        </button>
        <img src={cardInfo.img} alt={cardInfo.model} />
        <p>
          {cardInfo.make} {cardInfo.model},{cardInfo.year}
        </p>
        <div>
          <p>{cardInfo.address}</p>
          <p>{cardInfo.rentalCompany}</p>
          <p>{cardInfo.type}</p>
          <p>{cardInfo.mileage}</p>
          <p>{cardInfo.accessories[0]}</p>
        </div>
        <p>{cardInfo.description}</p>
        <h2>Accessories and functionalities:</h2>
        <p>{cardInfo.accessories}</p>
        <h2>Rental Conditions: </h2>
        <p>{cardInfo.rentalConditions}</p>
        <p>{cardInfo.mileage}</p>
      </ModalStyled>
    </Backdrop>
  );
};
