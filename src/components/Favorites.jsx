import { useSelector } from 'react-redux';
import { favoritesSelector } from '../redux/selectors';
import { CarCard } from './CarCard';

export const Favorites = () => {
  const favorites = useSelector(favoritesSelector);
  console.log(favorites);
  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites &&
          favorites.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </ul>
    </div>
  );
};
