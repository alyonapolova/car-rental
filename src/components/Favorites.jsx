import { useSelector } from 'react-redux';
import { favSelector } from '../redux/selectors';
import { CarCard } from './CarCard';
import { CatalogDiv } from './styles/Catalog.styled';
import { FavoritesUl } from './styles/Favorites.styled';

export const Favorites = () => {
  const favorites = useSelector(favSelector);

  return (
    <CatalogDiv>
      <h1>Favorites</h1>
      <FavoritesUl>
        {favorites &&
          favorites.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </FavoritesUl>
    </CatalogDiv>
  );
};
