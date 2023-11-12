import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";
import { formReducer } from "./slices/formSlice";
import { changeName, changeCost } from "./slices/formSlice";
import { addCar, removeCar, changeTerm } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeTerm };
