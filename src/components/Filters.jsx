// import calculatePrices from 'helpers/calculatePrices';
// import { useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMakes } from '../redux/operations';
// import { makesSelector } from '../redux/selectors';

// export const Filters = () => {
//   const dispatch = useDispatch();
//   const makes = useSelector(makesSelector);

//   useMemo(() => {
//     if (!makes) {
//       dispatch(getMakes());
//     }
//   }, [dispatch, makes]);

//   const prices = calculatePrices();

//   return (
//     <div>
//       <label htmlFor="brand">Car brand</label>
//       <select id="brand">
//         <option value="">--Please choose an option--</option>
//         {makes &&
//           makes.map((make, index) => (
//             <option key={index} value={make}>
//               {make}
//             </option>
//           ))}
//       </select>
//       <label htmlFor="price">Price / 1 hour</label>
//       <select id="price">
//         <option value="">--To $--</option>
//         {prices.length &&
//           prices.map((price, index) => (
//             <option key={index} value="price">
//               {price}
//             </option>
//           ))}
//       </select>
//       {/* <label htmlFor="mileage">Сar mileage / km</label>
//       <input id="mileage" placeholder="from" />
//       <input id="mileage" placeholder="to" /> */}
//     </div>
//   );
// };
