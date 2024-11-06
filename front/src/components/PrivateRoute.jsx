import { useUser } from '@/hooks/useUser'; 
import FormAcceso from '@/pages/FormAcceso'; 

const PrivateRoute = ({ children }) => {
  
  // Hook useUser para obtener el estado del usuario
  const { user } = useUser();

  return user ? (
    // Si el usuario está autenticado, se renderiza el contenido protegido (children)
    children
  ) : (
    // Si el usuario no está autenticado, se muestra el formulario de acceso
    <>
      <FormAcceso />
    </>
  );
};

export default PrivateRoute;
