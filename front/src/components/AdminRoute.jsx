// AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  
  // Verifica si el usuario existe y es administrador
  if (!user || user.role !== 'administrador') {
    // Redirige a la página principal o muestra un mensaje de acceso denegado
    return <Navigate to="/" />;
  }
  
  // Si es administrador, muestra el contenido
  return children;
};

export default AdminRoute;