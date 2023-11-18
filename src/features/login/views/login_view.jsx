import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';

const LoginView = () => {
  const { login } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();  //evita comportam.defecto y no refresca pantalla
    try {
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData); //Recorro los campos del formulario!
      /*const {email, password} = Object.fromEntries(
      New FormData(e.target))*/
      //Obtengo contenido DE todos campos del formulario
      //console.log(Object.fromEntries(formData));
      await login(email, password);
    } catch (error) {
      console.log(error); //Controlo el error!
    }    
    
  };
    
  return (
    <div>
      <h1>ReactFilms</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input type='email' name='email'/>
        <input type='password' name='password'/>
        <button type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginView;