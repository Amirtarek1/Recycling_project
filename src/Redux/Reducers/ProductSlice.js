import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
  error: null,
  loading: false,
  product: {},
};

export const productsFetch = createAsyncThunk("product/productsFetch", async () => {
  const token = await AsyncStorage.getItem("accessToken")
  const response = await fetch("http://10.0.2.2:8080/api/v1/catalog/items", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();

});


const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsFetch.fulfilled, (state, {payload}) => {
        state.loading = false;
        
        state.product = {
            ...payload
        };
      })
      .addCase(productsFetch.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message
      });
  },
})

export default ProductSlice.reducer;
