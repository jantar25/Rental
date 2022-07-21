import { createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name:"admin",
    initialState:{
        currentAdmin: null,
        error: null,
        isFetching: false,
    },
    reducers:{
        adminLoginStart:(state)=>{
            state.isFetching=true
        },
        adminLoginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentAdmin=action.payload
            state.error=null;
        },
        adminLoginFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },
        adminLogoutSuccess:(state)=>{
            state.currentAdmin= null;
        },
    }
})

export const {adminLoginStart,adminLoginSuccess,adminLoginFailure,adminLogoutSuccess} = adminSlice.actions;
export default adminSlice.reducer;