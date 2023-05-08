import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';




const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: "",

}

export const signUpUser = createAsyncThunk("signUpUser", async () => {
    const res = await
        axios.post("mando").then({
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    return await res.json();
})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(signUpUser.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(signUpUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            if (payload.error) {
              state.error = payload.error;
            } else {
              state.msg = payload.msg;
            }
          })
          .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });

        }
    
})

export default authSlice.reducer
