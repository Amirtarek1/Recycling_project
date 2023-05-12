import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';




const initialState = {
  loading: false,
  name: "",
  accessToken: "",
  error: "",
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

    addToken: (state, action) => {
      state.accessToken = action.payload;
      AsyncStorage.setItem('accessToken', action.payload);
    },
    addUser: (state, action) => {
      state.name = action.payload;
      AsyncStorage.setItem('name', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.accessToken = null;
      state.name = null;
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('name');
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
        console.log(payload.accessToken)
        
        state.loading = false;
        if (payload.error) {
          state.error = error;
        } else {
          state.accessToken = payload.accessToken ;
          
          if (payload.name) {
            state.name = payload.name;
            AsyncStorage.setItem("name", JSON.stringify(payload.name));
          } else {
            AsyncStorage.removeItem("name");
          }
          AsyncStorage.setItem("accessToken", payload.accessToken)

        }

      })
      .addCase(LoginUser.rejected, (state, action) => {
        console.log("LoginUser.rejected");
        state.loading = true;
        state.error = action.payload;
      });
    // SignUp
    builder
      .addCase(signUpUser.pending, (state, action) => {
        console.log("signUpUser.pending");
        console.log(action , "pending")
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("Sign Up is fulfilled")
        if (payload.error) {
          state.error = payload.error;
        } 
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });

  }

})


export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer
