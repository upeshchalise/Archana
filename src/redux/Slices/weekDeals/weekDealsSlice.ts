import { createSlice } from "@reduxjs/toolkit";
import weekItems from "../../../../datas/weekDeals_items";

export const weekDealSlice = createSlice({
  name: "weekDeal",
  initialState: {
    weekItems,
  },
  reducers: {},
});

export default weekDealSlice.reducer;
