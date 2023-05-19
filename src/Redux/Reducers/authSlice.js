import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const initialState = {
  loading: false,
  login: false,
  signUp: false,
  accessToken: "",
  userDate: {},
  error: ""
}

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  const res = await fetch("http://10.0.2.2:8080/api/v1/registration", {
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),

  })
  return await res.json();
})


export const LoginUser = createAsyncThunk("LoginUser", async (body) => {
  const res = await fetch("http://10.0.2.2:8080/api/v1/auth", {
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),

  })

  return await res.json();

})



const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = null;
      state.userDate = null;
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('userDate');
    }
  },
  extraReducers: (builder) => {
    // LoginUser
    builder
      .addCase(LoginUser.pending, (state, action) => {
        console.log("LoginUser.pending");
        state.loading = true;

      })
      .addCase(LoginUser.fulfilled, (state, { payload }) => {
        console.log("LoginUser.fulfilled");
        if (payload.error) {
          console.log("BAD CREDENTIALS")
        } else {
          state.login = true
          state.loading = false;
          state.userDate = payload.userDate
          console.log(payload)
          AsyncStorage.setItem('accessToken', payload.accessToken);

        }

      })
      .addCase(LoginUser.rejected, (state, action) => {
        console.log("LoginUser.rejected");
        state.loading = true;
        state.userDate = null
        state.error = action.payload
      });
    // SignUp
    builder
      .addCase(signUpUser.pending, (state, action) => {
        console.log("signUpUser.pending");
        state.loading = true;
        state.error = action.payload

      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("Sign Up is fulfilled")
        if (payload.error) {
          console.log("BAD CREDENTIALS")
        } else {
          state.signUp = true
          state.loading = false;
          state.userDate = payload.userDate
          console.log(payload)

        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = true;
        state.userDate = null;
        state.accessToken = null;
      });

  }

})


export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer
