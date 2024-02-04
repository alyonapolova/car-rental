import calculatePrices from 'helpers/calculatePrices';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMakes } from '../redux/operations';
import { makesSelector } from '../redux/selectors';
import { FilterDiv, FiltersDiv, Label, Select } from './styles/Filters.styled';

export const Filters = ({ handleMakeChange, handlePriceChange }) => {
  const dispatch = useDispatch();
  const makes = useSelector(makesSelector);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useMemo(() => {
    if (!makes) {
      dispatch(getMakes());
    }
  }, [dispatch, makes]);

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedMake(selectedValue);
    handleMakeChange(event);
  };

  const handleSelectorPriceChange = event => {
    const selectedPrice = event.target.value;
    setSelectedPrice(selectedPrice);
    handlePriceChange(event);
  };

  const prices = calculatePrices();

  return (
    <FiltersDiv>
      <FilterDiv>
        <Label htmlFor="brand">Car brand</Label>
        <Select id="brand" onChange={handleSelectChange} value={selectedMake}>
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
        <Select
          id="price"
          onChange={handleSelectorPriceChange}
          value={selectedPrice}
        >
          <option value="">To $</option>
          {prices &&
            prices.map((price, index) => (
              <option key={index} value={price}>
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
