import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, getCars } from '../redux/operations';
import { Catalog } from '../components/Catalog';
import { useCallback, useEffect, useRef } from 'react';
import { carsSelector, limitSelector, pageSelector } from '../redux/selectors';
import { Filters } from '../components/Filters';
import { setPage } from '../redux/slice';
import { Section } from 'components/styles/Container.styled';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  const makeRef = useRef('');
  const page = useSelector(pageSelector);
  const limit = useSelector(limitSelector);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCars({ page, limit, make: makeRef.current }));
  }, [dispatch, page, limit]);

  const handleMakeChange = useCallback(
    event => {
      makeRef.current = event.target.value;
      dispatch(setPage(1));
      dispatch(getAllCars({ page, make: makeRef.current }));
    },
    [dispatch, makeRef, page]
  );
  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Section>
      <Filters handleMakeChange={handleMakeChange} />
      <Catalog cars={cars} handleLoadMore={handleLoadMore} />
    </Section>
  );
}
