import { publicRequest,landLordRequest } from "../requestMethode";



import {landLordLoginStart,landLordLoginSuccess,landLordLoginFailure,landLordLogoutSuccess,
    updateLandLordStart,updateLandLordSuccess,updateLandLordFailure} from './landLordRedux'
import {addPropertyStart,addPropertySuccess,addPropertyFailure} from "./propertiesRedux"

// getProductStart,getProductSuccess,getProductFailure,
//     deleteProductStart,deleteProductSuccess,deleteProductFailure,
//     updateProductStart,updateProductSuccess,updateProductFailure,

// // GET ALL PRODUCTS
// export const getProducts = async (dispatch) =>{
//     dispatch(getProductStart());

//     try {
//         const res = await publicRequest.get("/products");
//         dispatch(getProductSuccess(res.data));
//     } catch (error) {
//         dispatch(getProductFailure());
//         console.log(error);
//     }
// }


// // DELETE A PRODUCT
// export const deleteProduct = async (id,dispatch) =>{
//     dispatch(deleteProductStart());

//     try {
//         await farmerRequest.delete(`/products/${id}`);
//         dispatch(deleteProductSuccess(id));
//     } catch (error) {
//         dispatch(deleteProductFailure());
//         console.log(error);
//     }
// }

// // UPDATE A PRODUCT
// export const updateProduct = async (id,updatedProduct,dispatch) =>{
//     dispatch(updateProductStart());
//     try {
//         await farmerRequest.put(`/products/${id}`,updatedProduct);
//         dispatch(updateProductSuccess({id,updatedProduct}));
//     } catch (error) {
//         dispatch(updateProductFailure());
//         console.log(error);
//     }
// }

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