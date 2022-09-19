import axios from "axios";

// const BASE_URL = "https://kigalirental.herokuapp.com/api/";
const BASE_URL = "https://rentaltest.herokuapp.com/api/";


function authAdminHeader() {
    const AdminToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).admin).currentAdmin?.accessToken
    return AdminToken;
  }
  
function authLandlordHeader() {
    const landLordToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).landLord).currentLandLord?.accessToken
    return landLordToken;
  }


export const publicRequest = axios.create({baseURL:BASE_URL});
export const landLordRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${authLandlordHeader()}`}});
export const adminRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${authAdminHeader()}`}})

   
