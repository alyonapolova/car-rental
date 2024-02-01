export const calculatePrices = data => {
  if (!data) return;

  return data
    .map(car => parseFloat(car.rentalPrice.replace('$', '')))
    .sort((a, b) => a - b);
};
