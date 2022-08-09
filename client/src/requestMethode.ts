import axios from "axios";



const BASE_URL = "https://kigalirental.herokuapp.com/api/";

const currentToken = localStorage.getItem("persist:root")

const landLordToken = currentToken && JSON.parse(JSON.parse(currentToken).landLord).currentLandLord?.accessToken;

const AdminToken = currentToken && JSON.parse(JSON.parse(currentToken).admin).currentAdmin?.accessToken;

export const publicRequest = axios.create({baseURL:BASE_URL});
        
export const landLordRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${landLordToken}`}});

export const adminRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${AdminToken}`}});

    // const BASE_URL = "https://kivugren.herokuapp.com/api/";
    // const TOKEN =currentToken? 
    // JSON.parse(JSON.parse(currentToken).user).currentUser?.accessToken : "";
    // export const userRequest = axios.create({
    // baseURL:BASE_URL,headers:{token:`Bearer ${TOKEN}`}});