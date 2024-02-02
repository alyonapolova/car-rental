import { CarCard } from './CarCard';
import { CatalogUl } from './styles/Catalog.styled';

export const Catalog = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      <h1>Catalog</h1>
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
export default Catalog;
