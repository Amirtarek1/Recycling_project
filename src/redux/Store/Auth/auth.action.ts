import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth_apis } from "../../API/Auth";

export const loginUser = createAsyncThunk<any, any, any>('login', async (
    args, { rejectWithValue }
  ) => {
    try {
      let res = await auth_apis.login(args);
      // alert( JSON.stringify(res?.status))
      if (res?.data?.status === 0) {
        return res?.data;
      } else {
        return res;
      }
    } catch (error) {
      return rejectWithValue(error)
  
    }
  })
