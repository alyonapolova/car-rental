import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/operations';
import { Catalog } from '../components/Catalog';
import { useCallback, useEffect, useRef, useState } from 'react';
import { carsSelector } from '../redux/selectors';
import { Filters } from '../components/Filters';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  // const pageRef = useRef(1);
  const [page, setPage] = useState(1);
  const makeRef = useRef('');

  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars({ page: 1, make: makeRef.current }));
  }, [dispatch, makeRef]);

  const handleMakeChange = useCallback(
    event => {
      makeRef.current = event.target.value;
      dispatch(getAllCars({ page: 1, make: makeRef.current }));
    },
    [dispatch, makeRef]
  );

  const loadMoreCars = async () => {
    await setPage(page + 1);
    dispatch(getAllCars({ page: page + 1, make: makeRef.current }));
  };

  return (
    <div>
      <Filters handleMakeChange={handleMakeChange} />
      <Catalog cars={cars} loadMoreCars={loadMoreCars} />
    </div>
  );
}
