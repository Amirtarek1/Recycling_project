import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loading: false,
  error: null,
  All_address: {},
};

export const getAddresses = createAsyncThunk(
  'Address/getAddresses',
  async (body) => {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch('http://10.0.2.2:8080/api/v1/user/addresses', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  }

);


export const addAddress = createAsyncThunk(
  'Address/addAddress',
  async (body) => {
    const token = await AsyncStorage.getItem('accessToken');
    
    const response = await fetch('http://10.0.2.2:8080/api/v1/user/addresses', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      /**
       * الـ body 
       * زي ده كدا
       * أنا ممكن ازود validation
       * ان مينفعش يعمل كذا عنوان بنفس الـ title
       { 
          title: "travel address",
          address: " el-dwar",
          firstName: "omar",
          lastName: "omar",
          phoneNumber: "02345988",
          isMain: false
	
        }
       */
      body: JSON.stringify(body),
    });

    return await response.json();
  }

);


const addressSlice = createSlice({
  name: 'Address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    /////// getAddresses //////////
      .addCase(getAddresses.pending, (state) => {
        console.log("getAddresses.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddresses.fulfilled, (state, {payload}) => {
        console.log("getAddresses.fulfilled")
        if (payload.error) {
          state.loading = false;
          console.log('Error in data from back');
        } else {
          state.loading = false;
          console.log('END OF PAYLOAD');
          state.All_address = {
            ...payload,
          };
          AsyncStorage.setItem('All_address', JSON.stringify(state.All_address));
        }
      })
      .addCase(getAddresses.rejected, (state, action) => {
        console.log("getAddresses.rejected")
        state.loading = false;
        state.error = action.payload;
      })   
             ////////addAddress//////
      .addCase(addAddress.pending, (state) => {
        console.log("addAddress.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, {payload}) => {
        console.log("addAddress.fulfilled")
        if (payload.error) {
          state.loading = false;
          console.log('Error in data from back');
        } else {
          state.loading = false;
          console.log('END OF PAYLOAD');
          state.All_address = {
            ...payload,
          };
          AsyncStorage.setItem('All_address', JSON.stringify(state.All_address));
        }
      })
      .addCase(addAddress.rejected, (state, action) => {
        console.log("addAddress.rejected")
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addressSlice.reducer;
