// import { getCars } from "./operations";

// const initialState = {
//   cars: null,
//   isLoading: false,
// };

// const carsSlice = {
//   name: "cars",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCars.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getCars.fulfilled, (state, action) => {
//         state.cars = action.payload.cars;
//         state.isLoading = false;
//       });
//   },
// };

// export default carsSlice;
