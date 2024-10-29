import { createContext, useContext, useState, useEffect} from "react";

//Crear un contexto de Usuario que abrace toda la aplicación
const UserContext = createContext();

//Crear un provider y exportarlo para usarlo en main.jsx
export function UserProvider({children}){
    const [user, setUser] = useState(null);

    //variables de entorno
    const { VITE_API_URL } = import.meta.env;
    //ver si ya estoy logueado
    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    //LOGIN
    const login = async (userData)=>{
        

        try{// fetch para enviarle al backend!
        const response = await fetch(`${VITE_API_URL}/acceso`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        //el backend me devuelve mi USUARIO completo
        //foto, nombre, email (NO CONTRASEÑA)
        const responseData = await response.json();
        const usuario = responseData.data;

        setUser(usuario);
        localStorage.setItem("user", JSON.stringify(usuario));

        localStorage.setItem('token', responseData.token);

    } catch (e) {
        console.error('Error:', e);
        return "Error en el servidor";
    }
    }

    //REGISTER
    const register = async (userData)=>{
        try{
                const response = await fetch(`${VITE_API_URL}/registro`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        
        const responseData = await response.json();

        const usuario = responseData.data;

        setUser(usuario);

        // Guardamos el Usuario en LocalStorage
        localStorage.setItem('user', JSON.stringify(usuario));

        // Guardamos el JWT token en LocalStorage
        localStorage.setItem('token', responseData.token);

        return null; // no hay error
    } catch (e) {
        console.error('Error:', e);
        return "Error en el servidor";
    }
};

    
    //SALIR
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem('token');
        setUser(null);
        console.log("User logged out");
    };


    return(
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    )
}

//Crear un Custom Hook para usar nuestro contexto de Usuario
//Se exporta para poder usarlo desde cualquier componente
export function useUser(){
    return useContext(UserContext);
}