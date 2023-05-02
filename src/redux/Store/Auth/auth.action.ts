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


  export const registUser = createAsyncThunk<any, any, any>('registUser', async (
    args, { rejectWithValue }
  ) => {
    try {
      let res = await auth_apis.Register(args);
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
