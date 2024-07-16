import {createReducer} from '@reduxjs/toolkit'
import {getCategoriesRequest, getProductRequest} from '../actions/product'


const initialState = {
    categories: [],
    products: []
}

export const getCategoriesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getCategoriesRequest.fulfilled, (state, action) =>{
        state.categories = action.payload
    })
})

export const getProductReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getProductRequest.fulfilled, (state, action) =>{
        state.products = action.payload
    })
})
