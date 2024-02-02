import calculatePrices from 'helpers/calculatePrices';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMakes } from '../redux/operations';
import { makesSelector } from '../redux/selectors';
import { FilterDiv, FiltersDiv, Label, Select } from './styles/Filters.styled';

export const Filters = () => {
  const dispatch = useDispatch();
  const makes = useSelector(makesSelector);

  useMemo(() => {
    if (!makes) {
      dispatch(getMakes());
    }
  }, [dispatch, makes]);

  const prices = calculatePrices();
  console.log(prices);

  return (
    <FiltersDiv>
      <FilterDiv>
        <Label htmlFor="brand">Car brand</Label>
        <Select id="brand">
          <option value="">Choose a car</option>
          {makes &&
            makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
        </Select>
      </FilterDiv>
      <FilterDiv>
        <Label htmlFor="price">Price / 1 hour</Label>
        <Select id="price">
          <option value="">To $</option>
          {prices &&
            prices.map((price, index) => (
              <option key={index} value="price">
                {price}
              </option>
            ))}
        </Select>
      </FilterDiv>
      {/* <label htmlFor="mileage">Сar mileage / km</label>
      <input id="mileage" placeholder="from" />
      <input id="mileage" placeholder="to" /> */}
    </FiltersDiv>
  );
};
