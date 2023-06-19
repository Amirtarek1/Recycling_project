import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Reducers/authSlice';
import thunk from 'redux-thunk';
import ProfileSlice from './Reducers/ProfileSlice';
import ProductSlice from './Reducers/ProductSlice';
import AddressSlice from './Reducers/AddressSlice';
import ChangePasswordSlice from './Reducers/ChangePasswordSlice';

const store = configureStore({
  middleware : [thunk],
    reducer: {
      user : authSlice,
      profile : ProfileSlice,
      product : ProductSlice,
      Address : AddressSlice,
      ChangePassword : ChangePasswordSlice,
    }
})


export default store;