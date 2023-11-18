import { useEffect, useState } from "react";
import { AppStorage } from "../../base/app_storage";
import { authApi } from "../../datasource/remote/auth/auth_api";
import { AuthContext } from "../context/auth_context";

//const delay = (ms) => new Promise ((resolve) => setTimeout(resolve, ms));
export const AUTH_KEY = 'isLoggedIn';

// NUESTRO PROVEEDOR DE DATOS !!
export const AuthProvider = ({ children, fallback }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    //FUNCION PARA AGREGAR DATOS A LOCAL STORAGE
    const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
    const getLoginState = async () => AppStorage.get(AUTH_KEY);
    const removeLoginState = async () => AppStorage.remove(AUTH_KEY);
    
    // NECESITO KE SE EJECUTE 1 VEZ
    // Y Cuando Monto Componente, obtengo el estado!
    useEffect(() => {
        //FUNCION PARA OBTENER DATOS LOCAL STORAGE
        const initAuth = async () => {
            try {
                const loginState = await getLoginState();
                if (!loginState) return;  //distinto a true que se valla!
                
                setIsloggedIn(loginState);  //guardo en el estado
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false);
            }        
        };

        initAuth();
    }, []);
    
    const login = async (email, password) => {
        //ENVIO AL BACKEND
        //NECESITO COMUNICARME CON BACKEND
        /*await authApi.post("/login", {
            email,
            password,
        });*/
        
        setIsloggedIn(true);
        saveLoginState(true); //Con esto Indico Inicie Session
    };

    const logout = async () => {
        setIsloggedIn(false);
        removeLoginState();  //Borrar esa clave
    };

    useEffect(() => {
        //ESTO OCURRE ANTES DE ENVIAR LA SOLICITUD AL SERVIDOR
        authApi.interceptors.request.use(
            async (config) => {
                
                //se puede hacer cualkier cosa con el objeto
                //de la request antes de enviarlo al SV.
                return config;
            },
            async (error) => {
                return Promise.reject(error);
            }
        );
        //ESTO OCURRE DESPUES DE RECIBIR LA SOLICITUD DEL SV.
        authApi.interceptors.response.use(
            (response) => response,
            async (error) => {
                //se puede hacer cualkier cosa con el objeto
                //del error de la response
                if (error.response.status === 401) await logout();
                return Promise.reject(error);
            }
        );
    }, []);

    if (fallback && isLoading) return fallback;


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