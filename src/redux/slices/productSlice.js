import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts =  createAsyncThunk("products/fetchProducts", async () => {
      const result = await axios.get('https://fakestoreapi.com/products')
      return result.data
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
           state.allProducts = action.payload
           state.loading = false
           state.error = ""
        }),
        builder.addCase(fetchProducts.pending,(state,action) => {
            state.allProducts = []
            state.loading = true
            state.error = ""
         }),
         builder.addCase(fetchProducts.rejected,(state,action) => {
            state.allProducts = []
            state.loading = false
            state.error = "API call failed! Please try after some time..."
         })
    }
})

export default productSlice.reducer