import { publicRequest,landLordRequest } from "../requestMethode";
import {landLordLoginStart,landLordLoginSuccess,landLordLoginFailure,landLordLogoutSuccess,
    updateLandLordStart,updateLandLordSuccess,updateLandLordFailure} from './landLordRedux'
import {addPropertyStart,addPropertySuccess,addPropertyFailure,getPropertiesStart,
    getPropertiesSuccess,getPropertiesFailure,deletePropertyStart,deletePropertySuccess,
    deletePropertyFailure,updatePropertyStart,updatePropertySuccess,updatePropertyFailure} from "./propertiesRedux"
import {adminLoginStart,adminLoginSuccess,adminLoginFailure,adminLogoutSuccess} from './adminRedux'


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

// LOGIN LANDLORD

export const LandLordLogin = async (dispatch:any,landLord:any) =>{
    dispatch(landLordLoginStart());
    try {
        const res = (await publicRequest.post("/landLordAuth/login",landLord));
        dispatch(landLordLoginSuccess(res.data));
        // localStorage.setItem("landlordToken",JSON.stringify(res.data.accessToken))
    } catch (error:any) {
        console.log(error.response.data.message)
        dispatch(landLordLoginFailure(error.response.data.message));
    }
}


export const landLordLogoutDone = async (dispatch:any) =>{
    dispatch(landLordLogoutSuccess());
    // localStorage.removeItem("landlordToken")
}


// LOGIN ADMIN

export const adminLogin = async (dispatch:any,admin:any) =>{
    dispatch(adminLoginStart());
    try {
        const res = (await publicRequest.post("/admin/login",admin));
        dispatch(adminLoginSuccess(res.data));
        // localStorage.setItem("adminToken",JSON.stringify(res.data.accessToken))
    } catch (error:any) {
        console.log(error.response.data.message)
        dispatch(adminLoginFailure(error.response.data.message));
    }
}


export const adminLogoutDone = async (dispatch:any) =>{
    dispatch(adminLogoutSuccess());
    // localStorage.removeItem("adminToken")
}


// UPDATE A LANDLORD
export const updateLandlord = async (id:any,updatedLandLord:any,dispatch:any) =>{
    dispatch(updateLandLordStart());
    try {
        await landLordRequest.put(`/landLordAuth/${id}`,updatedLandLord);
        dispatch(updateLandLordSuccess({id,updatedLandLord}));
    } catch (error) {
        dispatch(updateLandLordFailure(error));
    }
}



