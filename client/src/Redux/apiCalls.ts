import { publicRequest,landLordRequest } from "../requestMethode";



import {landLordLoginStart,landLordLoginSuccess,landLordLoginFailure,landLordLogoutSuccess,
    updateLandLordStart,updateLandLordSuccess,updateLandLordFailure} from './landLordRedux'
import {addPropertyStart,addPropertySuccess,addPropertyFailure,getPropertiesStart,
    getPropertiesSuccess,getPropertiesFailure,deletePropertyStart,deletePropertySuccess,
    deletePropertyFailure,updatePropertyStart,updatePropertySuccess,updatePropertyFailure} from "./propertiesRedux"

//     updateProductStart,updateProductSuccess,updateProductFailure,

// GET ALL PROPERTIES
export const getProperties = async (dispatch:any) =>{
    dispatch(getPropertiesStart());

    try {
        const res = await publicRequest.get("/property");
        dispatch(getPropertiesSuccess(res.data));
    } catch (error:any) {
        dispatch(getPropertiesFailure(error.response.data.message));
        console.log(error);
    }
}


// DELETE A PROPERTY
export const deletePropety = async (id:any,dispatch:any) =>{
    dispatch(deletePropertyStart());

    try {
        await landLordRequest.delete(`/property/${id}`);
        dispatch(deletePropertySuccess(id));
    } catch (error:any) {
        dispatch(deletePropertyFailure(error.response.data.message));
        console.log(error);
    }
}

// UPDATE A PROPERTY
export const updateProperty = async (id:any,updatedProperty:any,dispatch:any) =>{
    dispatch(updatePropertyStart());
    try {
        await landLordRequest.put(`/property/${id}`,updatedProperty);
        dispatch(updatePropertySuccess({id,updatedProperty}));
    } catch (error:any) {
        dispatch(updatePropertyFailure(error.response.data.message));
        console.log(error);
    }
}

// ADD A PROPERTY
export const addProperty = async (property:any,dispatch:any) =>{
    dispatch(addPropertyStart());
    try {
        const res = await landLordRequest.post('/property',property);
        dispatch(addPropertySuccess(res.data));
    } catch (error:any) {
        dispatch(addPropertyFailure(error.response.data.message));
    }
}



export const LandLordLogin = async (dispatch:any,landLord:any) =>{
    dispatch(landLordLoginStart());
    try {
        const res = (await publicRequest.post("/landLordAuth/login",landLord));
        dispatch(landLordLoginSuccess(res.data));
        
    } catch (error:any) {
        console.log(error.response.data.message)
        dispatch(landLordLoginFailure(error.response.data.message));
    }
}


export const landLordLogoutDone = async (dispatch:any) =>{
    dispatch(landLordLogoutSuccess());
}


// UPDATE A LANDLORD
export const updateFarmer = async (id:any,updatedLandLord:any,dispatch:any) =>{
    dispatch(updateLandLordStart());
    try {
        await landLordRequest.put(`/farmerAuth/${id}`,updatedLandLord);
        dispatch(updateLandLordSuccess({id,updatedLandLord}));
    } catch (error) {
        dispatch(updateLandLordFailure(error));
    }
}