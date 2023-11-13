import { useAuth } from '../hook/use_auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) return children;
  
    // UN COMPONENTE DEBE RETORNAR UN JSX, UN ELEMENTO
    return <Navigate to={"/login"} />;

};

export default PrivateRoute;