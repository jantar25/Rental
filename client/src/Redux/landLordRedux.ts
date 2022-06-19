import { createSlice} from '@reduxjs/toolkit'

const landLordSlice = createSlice({
    name:"landLord",
    initialState:{
        currentLandLord: null,
        error: null,
        isFetching: false,
    },
    reducers:{
        // farmerLoginStart:(state)=>{
        //     state.isFetching=true
        // },
        // farmerLoginSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.currentFarmer=action.payload
        //     state.error=null;
        // },
        // FarmerLoginFailure:(state,error)=>{
        //     state.isFetching=false;
        //     state.error=error;
        // },
        // FarmerLogoutSuccess:(state)=>{
        //     state.currentFarmer= null;
        // },

        // // FARMER UPDATE
        // updateFarmerStart:(state)=>{
        //     state.isFetching=true;
        //     state.error=false;
        // },
        // updateFarmerSuccess:(state,action)=>{
        //     state.isFetching=false;
        //     state.products[state.products.findIndex((item)=>item._id === action.payload.id)
        //     ]=action.payload.product;
        // },
        // updateFarmerFailure:(state,action)=>{
        //     state.isFetching=false;
        //     state.error=action.error;
        // },
    }
})

// export const {farmerLoginStart,farmerLoginSuccess,FarmerLoginFailure,FarmerLogoutSuccess,
//     updateFarmerStart,updateFarmerSuccess,updateFarmerFailure} = landLordSlice.actions;
export default landLordSlice.reducer;