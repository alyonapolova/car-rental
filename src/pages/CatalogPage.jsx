import { useDispatch, useSelector } from 'react-redux';
import { getAllCars, getCars } from '../redux/operations';
import { Catalog } from '../components/Catalog';
import { useCallback, useEffect, useState } from 'react';
import { carsSelector, limitSelector, pageSelector } from '../redux/selectors';
import { Filters } from '../components/Filters';
import { setPage } from '../redux/slice';
import { Section } from 'components/styles/Container.styled';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const page = useSelector(pageSelector);
  const limit = useSelector(limitSelector);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllCars({
        page,
        limit,
        make: selectedMake,
        rentalPrice: selectedPrice,
      })
    );
  }, [dispatch, page, limit, selectedMake, selectedPrice]);

  const handleMakeChange = useCallback(
    event => {
      const selectedValue = event.target.value;
      setSelectedMake(selectedValue);
      dispatch(setPage(1));
    },
    [dispatch]
  );

  const handlePriceChange = useCallback(
    event => {
      const selectedValue = event.target.value;
      setSelectedPrice(selectedValue);
      dispatch(setPage(1));
    },
    [dispatch]
  );

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Section>
      <Filters
        handleMakeChange={handleMakeChange}
        handlePriceChange={handlePriceChange}
      />
      <Catalog cars={cars} handleLoadMore={handleLoadMore} />
    </Section>
  );
}
