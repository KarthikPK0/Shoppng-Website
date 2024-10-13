import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'


const dStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default dStore