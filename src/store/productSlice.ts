import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state: any, action: any) {
    //  state.data = action.payload;
    //},
    extraReducers: (builder: any) => {
      builder
        .addCase(getProducts.pending, (state: any, action: any) => {
          state.status = "loading...";
        })
        .addCase(getProducts.fulfilled, (state: any, action: any) => {
          (state.data = action.payload), (state.status = "idel");
        })
        .addCase(getProducts.rejected, (state: any, action: any) => {
          state.status = "error";
        });
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result: any = data.json();
  return result;
});

//export function getProducts() {
// return async function getProductsThunk(dispatch: any, getState: any) {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const result: any = data.json();
//   dispatch(fetchProducts(result));
// };
//}
