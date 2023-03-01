import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers , createStore , compose , applyMiddleware} from 'redux'
import authSlice from "./Store/Auth/auth.slice";
import { persistReducer , persistStore } from "redux-persist";
import Thunk from "redux-thunk"


const presistConfig = {
    key : 'root',
    storage : AsyncStorage ,
    whitelist : ['auth']

}


const rootReducer = combineReducers({
    auth : authSlice
})



export type RootState = ReturnType<typeof rootReducer>;
let persistedReducer = persistReducer(presistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));
const persistor = persistStore(store);


export{store , persistor}