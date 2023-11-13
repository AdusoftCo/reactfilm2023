import { useEffect, useState } from "react";
import { authApi } from "../../datasource/remote/auth/auth_api";
import { AuthContext } from "../context/auth_context";

export const AUTH_KEY = 'isLoggedIn';
//const delay = (ms) => new Promise ((resolve) => setTimeout(resolve, ms));

// NUESTRO PROVEEDOR DE DATOS !!
export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsloggedIn] = useState(false);

    //FUNCION PARA AGREGAR DATOS A LOCAL STORAGE
    const saveLoginState = (state) => localStorage.setItem(AUTH_KEY, state);
    const getLoginState = () => localStorage.getItem(AUTH_KEY);
    const removeLoginState = () => localStorage.removeItem(AUTH_KEY);
    
    // NECESITO KE SE EJECUTE 1 VEZ
    // Y Cuando Monto Componente, obtengo el estado!
    useEffect(() => {
        
        //FUNCION PARA OBTENER DATOS LOCAL STORAGE
        const initAuth = async () => {
            
            const loginState = getLoginState();

            if (!loginState) return;  //distinto a true que se valla!

            setIsloggedIn(loginState);  //guardo en el estado
        };

        initAuth();

    }, []);
    
    const login = async (email, password) => {
        //ENVIO AL BACKEND

        //NECESITO COMUNICARME CON BACKEND
        const response = await authApi.post('/login', {
            email,
            password,
        });

        console.log(response.data);

        setIsloggedIn(true);
        saveLoginState(true); //Con esto Indico Inicie Session
    };

    const logout = async () => {
        setIsloggedIn(false);
        removeLoginState();  //Borrar esa clave
    };

    return (
        <AuthContext.Provider 
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};