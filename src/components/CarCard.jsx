export const CarCard = ({ car }) => {
  return (
    <div>
      <img src={car.img} width="150" alt={car.model} />
      <h2>{car.make}</h2>
      <h2>{car.rentalPrice}</h2>
      <p>{car.address}</p>
      <p>{car.rentalCompany}</p>
      <p>{car.type}</p>
      <p>{car.model}</p>
      <p>{car.mileage}</p>
      <p>{car.accessories[0]}</p>
    </div>
  );
};
