
import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './auth.action'
import {initialState} from "./type"

export const authslice = createSlice({
    name : "auth",
    initialState ,
    reducers :  {
        setloading : (state , action )=> state.loading = action.payload
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled , ( state , action )=> {
            state.loading = true
        } )
    },
})


export default authslice.reducer

export const {setloading} = authslice.actions