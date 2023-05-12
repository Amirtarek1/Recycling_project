import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Reducers/authSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  middleware : [thunk],
    reducer: {
      user : authSlice
    }
})


export default store;