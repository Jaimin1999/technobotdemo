
import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./CountReducer";
import CurrentMonthApiReducer from "./CurrentMonthApiReducer";

export const store = configureStore({
    reducer: { CountReducer, CurrentMonth: CurrentMonthApiReducer }
});
