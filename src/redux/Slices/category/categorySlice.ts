import { createSlice } from "@reduxjs/toolkit";
import categories from "../../../../datas/categories";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories,
  },
  reducers: {},
});

export default categorySlice.reducer;
