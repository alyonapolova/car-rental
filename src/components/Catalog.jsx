import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/slice';
import { getAllCars } from '../redux/operations';
import { carsSelector, currentPageSelector } from '../redux/selectors';
import { CarCard } from './CarCard';
import { Filters } from './Filters';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  const currentPage = useSelector(currentPageSelector);

  console.log('currentPage ', currentPage);

  useEffect(() => {
    if (currentPage === null) {
      dispatch(getAllCars(1));
    }
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div>
      <Filters />
      <h1>Cars List</h1>
      <ul>
        {cars &&
          cars.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </ul>
      {cars.length >= 12 && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
export default Catalog;
