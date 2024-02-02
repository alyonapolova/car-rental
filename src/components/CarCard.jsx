import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/slice';

export const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(car));
  };

  console.log(car);
  return (
    <div>
      <img src={car.img} width="150" alt={car.model} />
      <button type="button" onClick={handleAddToFavorites}>
        add to fav
      </button>
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
