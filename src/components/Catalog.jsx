export const Catalog = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      <h1>Catalog</h1>
      <ul>{cars && cars.map(car => <li key={car.id}>{car.model}</li>)}</ul>
    </div>
  );
};
export default Catalog;
