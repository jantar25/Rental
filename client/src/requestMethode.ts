import axios from "axios";



const BASE_URL = "http://localhost:5000/api/";

const currentToken = localStorage.getItem("persist:root")

const landLordToken = currentToken && JSON.parse(JSON.parse(currentToken).landLord).currentLandLord?.accessToken;
    
    
export const publicRequest = axios.create({baseURL:BASE_URL});
        
export const landLordRequest = axios.create({
    baseURL:BASE_URL,headers:{token:`Bearer ${landLordToken}`}});

    // const BASE_URL = "https://kivugren.herokuapp.com/api/";
    // const TOKEN =currentToken? 
    // JSON.parse(JSON.parse(currentToken).user).currentUser?.accessToken : "";
    // export const userRequest = axios.create({
    // baseURL:BASE_URL,headers:{token:`Bearer ${TOKEN}`}});