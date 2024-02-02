export const Modal = ({ isShown, closeModal, cardInfo }) => {
  if (!isShown) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={closeModal}>&#9421;</button>
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
      </div>
    </div>
  );
};
