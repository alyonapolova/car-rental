import { useSelector } from 'react-redux';
import { pageSelector, totalPagesSelector } from '../redux/selectors';
import { CarCard } from './CarCard';
import { CatalogDiv, CatalogUl, LoadMoreBtn } from './styles/Catalog.styled';

export const Catalog = ({ cars, handleLoadMore }) => {
  const totalPages = useSelector(totalPagesSelector);
  const page = useSelector(pageSelector);

  const showBtn = totalPages > page;

  return (
    <CatalogDiv>
      <CatalogUl>
        {cars && cars.map(car => <CarCard key={car.id} car={car} />)}
      </CatalogUl>
      {cars && showBtn && (
        <LoadMoreBtn type="button" onClick={() => handleLoadMore()}>
          Load More
        </LoadMoreBtn>
      )}
    </CatalogDiv>
  );
};
