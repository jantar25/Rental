import { createSlice} from '@reduxjs/toolkit'

const landLordSlice = createSlice({
    name:"landLord",
    initialState:{
        currentLandLord: null,
        error: null,
        isFetching: false,
    },
    reducers:{
        landLordLoginStart:(state)=>{
            state.isFetching=true
        },
        landLordLoginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentLandLord=action.payload
            state.error=null;
        },
        landLordLoginFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },
        landLordLogoutSuccess:(state)=>{
            state.currentLandLord= null;
        },

        // FARMER UPDATE
        updateLandLordStart:(state)=>{
            state.isFetching=true;
        },
        updateLandLordSuccess:(state,action)=>{
            state.isFetching=false;
            // state.products[state.products.findIndex((item:any)=>item._id === action.payload.id)
            // ]=action.payload.product;
        },
        updateLandLordFailure:(state,action:any)=>{
            state.isFetching=false;
            state.error=action.error;
        },
    }
})

export const {landLordLoginStart,landLordLoginSuccess,landLordLoginFailure,landLordLogoutSuccess,
    updateLandLordStart,updateLandLordSuccess,updateLandLordFailure} = landLordSlice.actions;
export default landLordSlice.reducer;