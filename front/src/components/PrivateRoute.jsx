//Hooks
import {useUser} from '@/hooks/useUser';
import FormAcceso from '@/pages/FormAcceso';

const PrivateRoute = ({children}) => {

    const {user} = useUser();

    return user ? children
            :<>
            <h2>Ruta privada</h2>
             <p>Accede a tu cuenta para visualizar el contenido</p>
             <FormAcceso/>
            </>
        
     ;
}
 
export default PrivateRoute;