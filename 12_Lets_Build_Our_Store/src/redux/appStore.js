import {configureStore, createReducer} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

//Big reducer for appStore containing small reducers 
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;