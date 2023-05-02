import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth_apis } from "../../API/Auth";

export const loginUser = createAsyncThunk<any, any, any>('login', async (
    args, { rejectWithValue }
  ) => {
    try {
      let res = await auth_apis.login(args);
      // console.log( JSON.stringify(res));
      
      if (res?.data?.status === 0) {
        return res?.data;
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error)
  
    }
  })


  export const signUpUser = createAsyncThunk<any, any, any>('signUpUser', async (
    args, { rejectWithValue }
  ) => {
    try {
      let res = await auth_apis.signUpUser(args);
      // console.log( JSON.stringify(res));
      
      if (res?.data?.status === 0) {
        return res?.data;
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error)
  
    }
  })
