import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';



const initialState = {
  error: null,
  loading: false,
  BodyofChangePassword: {},
};



export const ChangePasswordfetch = createAsyncThunk(
    'ChangePassword/ChangePasswordfetch',
    async (body) => {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await fetch('http://10.0.2.2:8080/api/v1/password/change', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
  
      return await response.json();
    }
  // واتسسسسسسسسسس واتسسسسسسسسس
  );
  
const ChangePasswordSlice = createSlice({
  name: "ChangePassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(ChangePasswordfetch.pending, (state) => {
        console.log("addAddress.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(ChangePasswordfetch.fulfilled, (state, {payload}) => {
        console.log("ChangePasswordfetch.fulfilled")
        console.log("C/hange password ....")
        console.log("payload:  " , payload)
        console.log("state:  " , state)

       
        if (payload.error && payload.status === 400) {
          console.log(payload)
          state.loading = false;
          console.log('Error in data from back');
        } else {
          state.loading = false;
          console.log(payload.state) // رد واتسسسسسس
        }
      })
      .addCase(ChangePasswordfetch.rejected, (state, action) => {
        console.log("ChangePasswordfetch.rejected")
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ChangePasswordSlice.reducer;
