import { CarCard } from './CarCard';
import { Filters } from './Filters';
import { CatalogDiv, CatalogUl, LoadMoreBtn } from './styles/Catalog.styled';

export const Catalog = ({ cars }) => {
  console.log(cars);
  return (
    <CatalogDiv>
      <Filters />
      <CatalogUl>
        {cars && cars.map(car => <CarCard key={car.id} car={car} />)}
      </CatalogUl>
      <LoadMoreBtn type="button">Load More</LoadMoreBtn>
    </CatalogDiv>
  );
};
