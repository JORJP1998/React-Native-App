// import {createAsyncThunk} from '@reduxjs/toolkit'
// import Api from "../../Api";
//
// export const getCategoriesRequest = createAsyncThunk('get-Categories',
//     async (payload,thunkAPI) =>{
//         try {
//             const {data} = await Api.getCategories(payload)
//             return data
//         }catch (e){
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )
//
// export const getProductRequest = createAsyncThunk('get-Product',
//     async (payload,thunkAPI) =>{
//         try {
//             const {data} = await Api.getProduct(payload);
//             console.log(data, "aaaaaa");
//             return data
//         }catch (e){
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )
