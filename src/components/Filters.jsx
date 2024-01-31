import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMakes } from "../redux/operations";
import { carsSelector, makesSelector } from "../redux/selectors";

export const Filters = () => {
  const dispatch = useDispatch();
  const makes = useSelector(makesSelector);
  const cars = useSelector(carsSelector);
  const [rentalPrice, setRentalPrice] = useState([]);

  useEffect(() => {
    dispatch(getMakes());
    if (cars) {
      const prices = cars.map((car) =>
        parseFloat(car.rentalPrice.replace("$", ""))
      );
      const sortedPrice = prices.sort((a, b) => a - b);
      const sortedRentalPrice = [...new Set(sortedPrice)];

      setRentalPrice(sortedRentalPrice);
      console.log("rentalPrice", sortedRentalPrice);
    }
  }, [dispatch, cars]);

  return (
    <div>
      <label htmlFor="brand">Car brand</label>
      <select id="brand">
        <option value="">--Please choose an option--</option>
        {makes &&
          makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
      </select>
      <label htmlFor="price">Price / 1 hour</label>
      <select id="price">
        <option value="">--To $--</option>
        {rentalPrice &&
          rentalPrice.map((price, index) => (
            <option key={index} value="price">
              {price}
            </option>
          ))}
      </select>
      {/* <label htmlFor="mileage">Сar mileage / km</label>
      <input id="mileage" placeholder="from" />
      <input id="mileage" placeholder="to" /> */}
    </div>
  );
};