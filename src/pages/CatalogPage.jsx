import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/operations';
import { Catalog } from '../components/Catalog';
import { useCallback, useEffect, useRef } from 'react';
import { carsSelector } from '../redux/selectors';
import { Filters } from '../components/Filters';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  const pageRef = useRef(1);
  const selectedMakeRef = useRef('');

  console.log(pageRef);

  useEffect(() => {
    pageRef.current = 1;
    dispatch(
      getAllCars({ page: pageRef.current, make: selectedMakeRef.current })
    );
  }, [dispatch, selectedMakeRef]);

  const handleMakeChange = useCallback(
    event => {
      selectedMakeRef.current = event.target.value;
      pageRef.current = 1;
      dispatch(
        getAllCars({ page: pageRef.current, make: selectedMakeRef.current })
      );
    },
    [dispatch]
  );

  const loadMoreCars = () => {
    pageRef.current++;
    dispatch(
      getAllCars({ page: pageRef.current, make: selectedMakeRef.current })
    );
  };
  return (
    <div>
      <Filters handleMakeChange={handleMakeChange} />
      <Catalog cars={cars} loadMoreCars={loadMoreCars} />
    </div>
  );
}
