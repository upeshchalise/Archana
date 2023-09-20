import categoryReducer from "./category/categorySlice";
import weekDealReducer from "./weekDeals/weekDealsSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  category: categoryReducer,
  weekDeal: weekDealReducer,
});
