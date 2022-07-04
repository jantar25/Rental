import { createSlice} from '@reduxjs/toolkit'

const propertiesSlice = createSlice({
    name:"properties",
    initialState:{
        properties: [],
        isFetching: false,
        error: null,
    },
    reducers:{
        // GET ALL PROPERTIES
        getPropertiesStart:(state)=>{
            state.isFetching=true;
        },
        getPropertiesSuccess:(state,action)=>{
            state.isFetching=false;
            state.properties=action.payload;
            state.error=null;
        },
        getPropertiesFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },

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

         //ADD A PROPERTY
         addPropertyStart:(state)=>{
            state.isFetching=true;
        },
        addPropertySuccess:(state:any,action)=>{
            state.isFetching=false;
            state.properties.push(action.payload)
            state.error=null;
        },
        addPropertyFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },
    }
})

// getProductStart,getProductSuccess,getProductFailure,
//     deleteProductStart,deleteProductSuccess,deleteProductFailure,
//     updateProductStart,updateProductSuccess,updateProductFailure,
export const {addPropertyStart,addPropertySuccess,addPropertyFailure,
    getPropertiesStart,getPropertiesSuccess,getPropertiesFailure} = propertiesSlice.actions;
export default propertiesSlice.reducer;