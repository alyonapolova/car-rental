import { useSelector } from 'react-redux';
import { favSelector } from '../redux/selectors';
import { CarCard } from './CarCard';
import { FavoritesUl } from './styles/Favorites.styled';

export const Favorites = () => {
  const favorites = useSelector(favSelector);
  console.log(favorites);
  return (
    <div>
      <h1>Favorites</h1>
      <FavoritesUl>
        {favorites &&
          favorites.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </FavoritesUl>
    </div>
  );
};
