import { createSlice} from '@reduxjs/toolkit'

const propertiesSlice = createSlice({
    name:"product",
    initialState:{
        products: [],
        isFetching: false,
        error: false,
    },
    reducers:{
        // // GET ALL PRODUCTS
        // getProductStart:(state)=>{
        //     state.isFetching=true;
        //     state.error=false;
        // },
        // getProductSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.products=action.payload;
        //     state.error=false;
        // },
        // getProductFailure:(state)=>{
        //     state.isFetching=false;
        //     state.error=true;
        // },

        //  // DELETE A PRODUCT
        // deleteProductStart:(state)=>{
        //     state.isFetching=true;
        //     state.error=false;
        // },
        // deleteProductSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.products.splice(
        //         state.products.findIndex((item)=>item._id === action.payload),
        //         1
        //     )
        //     state.error=false;
        // },
        // deleteProductFailure:(state)=>{
        //     state.isFetching=false;
        //     state.error=true;
        // },

        // // UPDATE A PRODUCT
        // updateProductStart:(state)=>{
        //     state.isFetching=true;
        //     state.error=false;
        // },
        // updateProductSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.products[state.products.findIndex((item)=>item._id === action.payload.id)
        //     ]=action.payload.product;
        // },
        // updateProductFailure:(state)=>{
        //     state.isFetching=false;
        //     state.error=true;
        // },

        //  //ADD A PRODUCT
        //  addProductStart:(state)=>{
        //     state.isFetching=true;
        //     state.error=false;
        // },
        // addProductSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.products.push(action.payload)
        // },
        // addProductFailure:(state)=>{
        //     state.isFetching=false;
        //     state.error=true;
        // },
    }
})

// export const {getProductStart,getProductSuccess,getProductFailure,
//     deleteProductStart,deleteProductSuccess,deleteProductFailure,
//     updateProductStart,updateProductSuccess,updateProductFailure,
//     addProductStart,addProductSuccess,addProductFailure} = propertiesSlice.actions;
export default propertiesSlice.reducer;