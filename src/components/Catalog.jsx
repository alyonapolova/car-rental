import { CarCard } from './CarCard';
import { Filters } from './Filters';
import { CatalogDiv, CatalogUl } from './styles/Catalog.styled';

export const Catalog = ({ cars }) => {
  console.log(cars);
  return (
    <CatalogDiv>
      <Filters />
      <CatalogUl>
        {cars && cars.map(car => <CarCard key={car.id} car={car} />)}
      </CatalogUl>
      <button type="button">Load More</button>
    </CatalogDiv>
  );
};
