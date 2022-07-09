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

         // DELETE A PRODUCT
        deletePropertyStart:(state)=>{
            state.isFetching=true;
            state.error=null;
        },
        deletePropertySuccess:(state,action)=>{
            state.isFetching=false;
            state.properties.splice(
                state.properties.findIndex((item:any)=>item._id === action.payload),
                1
            )
            state.error=null;
        },
        deletePropertyFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },

        // UPDATE A PROPERTY
        updatePropertyStart:(state)=>{
            state.isFetching=true;
            state.error=null;
        },
        updatePropertySuccess:(state:any,action:any)=>{
            state.isFetching=false;
            state.properties[state.properties.findIndex((item:any)=>item._id === action.payload.id)
            ]=action.payload.updatedProperty;
            state.error=null;
        },
        updatePropertyFailure:(state,error:any)=>{
            state.isFetching=false;
            state.error=error;
        },

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


export const {addPropertyStart,addPropertySuccess,addPropertyFailure,
    getPropertiesStart,getPropertiesSuccess,getPropertiesFailure,
    deletePropertyStart,deletePropertySuccess,deletePropertyFailure,
    updatePropertyStart,updatePropertySuccess,updatePropertyFailure} = propertiesSlice.actions;
export default propertiesSlice.reducer;