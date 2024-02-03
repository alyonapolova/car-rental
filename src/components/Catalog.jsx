import { CarCard } from './CarCard';
// eslint-disable-next-line
import { CatalogDiv, CatalogUl, LoadMoreBtn } from './styles/Catalog.styled';

export const Catalog = ({ cars, loadMoreCars }) => {
  return (
    <CatalogDiv>
      <CatalogUl>
        {cars && cars.map(car => <CarCard key={car.id} car={car} />)}
      </CatalogUl>
      {/* {cars.length === 12 && (
        <LoadMoreBtn type="button" onClick={() => loadMoreCars()}>
          Load More
        </LoadMoreBtn>
      )} */}
    </CatalogDiv>
  );
};
