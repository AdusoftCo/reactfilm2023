import axios from "axios";

// ME CREE UNA API!, AuthApi es 1 Instancia de Axios!
export const authApi = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true,  
});
//INDICA QUE TENDRA COOKIES!