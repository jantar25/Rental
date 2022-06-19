import { publicRequest,landLordRequest } from "../requestMethode";
import { useNavigate } from "react-router"

import {landLordLoginStart,landLordLoginSuccess,landLordLoginFailure,landLordLogoutSuccess,
    updateLandLordStart,updateLandLordSuccess,updateLandLordFailure} from './landLordRedux'
// import {getProductStart,getProductSuccess,getProductFailure,
//     deleteProductStart,deleteProductSuccess,deleteProductFailure,
//     updateProductStart,updateProductSuccess,updateProductFailure,
//     addProductStart,addProductSuccess,addProductFailure} from "./productRedux"



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

// // ADD A PRODUCT
// export const addProduct = async (product,dispatch) =>{
//     dispatch(addProductStart());

//     try {
//         const res = await farmerRequest.post('/products',product);
//         dispatch(addProductSuccess(res.data));
//     } catch (error) {
//         dispatch(addProductFailure());
//         console.log(error);
//     }
// }



export const landLordLogin = async (dispatch:any,landLord:any) =>{
    dispatch(landLordLoginStart());
    // const history = useNavigate()
    try {
        const res = (await publicRequest.post("/landLordAuth/login",landLord));
        dispatch(landLordLoginSuccess(res.data));
        // history('/');
    } catch (error:any) {
        console.log(error.response.data.message)
        dispatch(landLordLoginFailure(error.response.data.message));
    }
}


export const landLordLogoutDone = async (dispatch:any) =>{
    dispatch(landLordLogoutSuccess());
}


// // UPDATE A FARMER
// export const updateFarmer = async (id,updatedFarmer,dispatch) =>{
//     dispatch(updateFarmerStart());
//     try {
//         await farmerRequest.put(`/farmerAuth/${id}`,updatedFarmer);
//         dispatch(updateFarmerSuccess({id,updatedFarmer}));
//     } catch (error) {
//         dispatch(updateFarmerFailure(error));
//     }
// }