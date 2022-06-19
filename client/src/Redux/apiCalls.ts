import { publicRequest,landLordRequest } from "../requestMethode";

// import {farmerLoginStart,farmerLoginSuccess,FarmerLoginFailure,FarmerLogoutSuccess,
//     updateFarmerStart,updateFarmerSuccess,updateFarmerFailure} from './farmerRedux'
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

// export const login = async (dispatch,user) =>{
//     dispatch(loginStart());

//     try {
//         const res = await publicRequest.post("/auth/login",user);
//         dispatch(loginSuccess(res.data));
//     } catch (error) {
//         dispatch(loginFailure(error.response.data));
//     }
// }

// export const farmerLogin = async (dispatch,farmer) =>{
//     dispatch(farmerLoginStart());
//     try {
//         const res = (await publicRequest.post("/farmerAuth/login",farmer));
//         dispatch(farmerLoginSuccess(res.data));
    
//     } catch (error) {
//         console.log(error.response.data.message)
//         dispatch(FarmerLoginFailure(error.response.data.message));
//     }
// }

// export const logoutDone = async (dispatch) =>{
//     dispatch(logoutSuccess());
// }

// export const farmerLogoutDone = async (dispatch) =>{
//     dispatch(FarmerLogoutSuccess());
// }


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