import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getProductThunk = createAsyncThunk("product/get", async () => {
    const res = await axios.get("http://localhost:5000/product")
    return res.data
  }
)

//POST
export const postProductThunk = createAsyncThunk("product/post", async (data) => {
    await axios.post("http://localhost:5000/product", data)
    return data
})

//Delete
export const deleteProductThunk = createAsyncThunk('/product/delete', async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`)
    return id
})


const productSlice = createSlice({
    name:'product',
    initialState:{},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getProductThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
        .addCase(getProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
         //post
        .addCase(postProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.product.push(action.payload)
        })
        //delete
        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.product = state.product.filter(item => item._id !== action.payload)
        })
    }
})
export default productSlice.reducer