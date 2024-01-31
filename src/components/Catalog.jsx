import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/operations";
import { carsSelector } from "../redux/selectors";
import { CarCard } from "./CarCard";
export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  console.log("cars ", cars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars &&
          cars.map((car) => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
      </ul>
      <button type="button">Load More</button>
    </div>
  );
};
