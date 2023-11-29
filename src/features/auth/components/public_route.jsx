
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/use_auth';

const PublicRoute = ({ children }) => {
  
  const { isLoggedIn } = useAuth();
  
  //SI ESTOY LOGUEADO
  if (isLoggedIn) return <Navigate to={"/"} />;
  
  //EN CASO DE NO ESTAR LOGUEADO!
  //DEJAR PASAR EL COMPONENTE!
  return children;
};

export default PublicRoute;