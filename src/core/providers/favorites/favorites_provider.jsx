import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppStorage } from '../../base/app_storage';
import { FavoritesContext } from './favorites_context';

const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);
    //Para SINCRONIZAR DATOS-Traer Datos!!
    useEffect (() => {
        AppStorage.get()
    }, []);

    const addFavorites = (movie) => {};

    const removeFavorites = (movie) => { };

    const isFavorite = (movie) => { };

  return <FavoritesContext.Provider>
            {children}  
         </FavoritesContext.Provider>
  
}

export default FavoritesProvider;