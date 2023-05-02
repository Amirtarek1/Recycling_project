


// import { createSlice } from '@reduxjs/toolkit'
// import { loginUser } from './auth.action'
// import {initialState} from "./type"

// export const authslice = createSlice({
//     name : "auth",
//     initialState ,
//     reducers :  {
//         setloading : (state , action )=> state.loading = action.payload
//     },
//     extraReducers(builder) {
//         builder.addCase(loginUser.fulfilled , ( state , action )=> {
//             // state.loading = true
//             state.accessToken=action.payload.accessToken
//         } )
//     },



// })



// export default authslice.reducer

// export const {setloading} = authslice.actions


import {initialState} from "./type"
import { createSlice } from '@reduxjs/toolkit';
import { signUpUser } from './auth.action';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

