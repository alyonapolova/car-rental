import { CarCard } from './CarCard';
import { Filters } from './Filters';
import { CatalogUl } from './styles/Catalog.styled';

export const Catalog = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      <Filters />
      <CatalogUl>
        {cars &&
          cars.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </CatalogUl>
      <button type="button">Load More</button>
    </div>
  );
};
