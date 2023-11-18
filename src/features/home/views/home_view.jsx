import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import { authApi } from "../../../core/datasource/remote/auth/auth_api";

import axios from 'axios';

const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
  language: "en-EN",
});
console.log(import.meta.env.VITE_APP_TMDB_API_KEY);

const HomeView = () => {
  const { logout } = useAuth();
  
  const getUser = async () => {
    const response = await authApi.get("/user");
    console.log(response.data);
  };

  return (
    <div>
      <h1>Home</h1>
      
      <button onClick={getUser}>Get User</button>
      <button onClick={logout}>Cerrar Sessión</button>
      
    </div>
  );
};

export default HomeView;