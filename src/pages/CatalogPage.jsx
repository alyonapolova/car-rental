import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/operations';
import { Catalog } from '../components/Catalog';
import { useEffect } from 'react';
import { carsSelector } from '../redux/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  console.log(cars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return <Catalog cars={cars} />;
}
