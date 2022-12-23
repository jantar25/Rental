import axios from "axios";

// const BASE_URL = "https://kigalirental.herokuapp.com/api/";
const BASE_URL = "https://kigalirental.fly.dev/api/";
// const BASE_URL = "http://localhost:5000/api/";




const currentToken = localStorage.getItem("persist:root")

const landLordToken = currentToken && JSON.parse(JSON.parse(currentToken).landLord).currentLandLord?.accessToken;

const AdminToken = currentToken && JSON.parse(JSON.parse(currentToken).admin).currentAdmin?.accessToken;

export const publicRequest = axios.create({baseURL:BASE_URL});
export const landLordRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${landLordToken}`}});
export const adminRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${AdminToken}`}})

   
