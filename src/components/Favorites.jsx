import { useDispatch, useSelector } from 'react-redux';
import { filterFav } from '../redux/slice';
import { favSelector } from '../redux/selectors';
import { CarCard } from './CarCard';
import { CatalogDiv } from './styles/Catalog.styled';
import { BtnAddress, BtnDiv, FavoritesUl } from './styles/Favorites.styled';

export const Favorites = () => {
  const favorites = useSelector(favSelector);
  const dispatch = useDispatch();

  const handleFilterClick = address => {
    dispatch(filterFav(address));
  };

  return (
    <CatalogDiv>
      <BtnDiv>
        {favorites &&
          favorites
            .filter(
              (car, index, self) =>
                self.findIndex(c => c.address === car.address) === index
            )
            .map(car => (
              <BtnAddress
                type="button"
                onClick={() => {
                  console.log(car.address);
                  handleFilterClick(car.address);
                }}
                key={car.id}
              >
                {car.address} &#9421;
              </BtnAddress>
            ))}
      </BtnDiv>
      <FavoritesUl>
        {favorites && favorites.map(car => <CarCard key={car.id} car={car} />)}
      </FavoritesUl>
    </CatalogDiv>
  );
};
