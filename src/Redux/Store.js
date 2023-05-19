import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Reducers/authSlice';
import thunk from 'redux-thunk';
import ProfileSlice from './Reducers/ProfileSlice';

const store = configureStore({
  middleware : [thunk],
    reducer: {
      user : authSlice,
      profile : ProfileSlice
    }
})


export default store;