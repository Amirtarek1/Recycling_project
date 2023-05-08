import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Reducers/authSlice';

const store = configureStore({
    reducer: {
        user: authSlice
    }
})


export default store;