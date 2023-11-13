import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const HomeView = () => {

  const { logout, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>
        Cerrar Sessión
      </button>
    </div>
  );
};

export default HomeView;