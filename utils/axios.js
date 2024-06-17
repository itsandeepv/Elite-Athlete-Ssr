import axios from "axios";
import c from "@constants/Common";
import Cookies from 'js-cookie';

const intance = axios.create({baseURL: c.BASE_URL});
intance.interceptors.request.use((request) => {
    const token = Cookies.get("jwt");
    if(token){
        request.headers.authorization = `${token}`;
    }
    return request;
},(error) => {
    return Promise.reject(error);
});
intance.interceptors.response.use((response) => {
    return Promise.resolve(response);
},async(error) => {
    if(error.response.data.status === 401){
       
        if(window.location.pathname !== "/"){
            window.location.href = '/';
        }else{
            window.location.reload();
        }
        return Promise.reject(error);
    }else{
        return Promise.reject(error);
    }
});
export default intance;