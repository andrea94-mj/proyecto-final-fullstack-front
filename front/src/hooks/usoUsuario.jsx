import { createContext, useContext, useState, useEffect} from "react";

//Crear un contexto de Usuario

const UserContext = createContext();

//Crear un provider y exportarlo para usarlo en main.jsx

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    //variables de entorno
    const {VITE_API_URL, VITE_BACKEND} = import.meta.env;

    //ver si ya estoy logueado
    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    //LOGIN
    const login = async (userData)=>{
        console.log('Estoy en login');

        //fetch para enviarle al backend!
        const response = await fetch(`${VITE_API_URL}/acceso`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
        });

        //el backend me devuelve mi USUARIO completo
        //foto, nombre, email (NO CONTRASEÑA)
        const responseData = await response.json();
        localStorage.setItem("user", JSON.stringify(responseData));

        //con setUser guardo mis datos de usuario
        setUser(responseData);
    }

    //REGISTER
    const register = async (userData)=>{

        //fetch para enviarle al backend!
        const response = await fetch(`${VITE_API_URL}/registro`, {
            method: "POST",
            headers: {
                'Content-type' : 'aplication/json'
            },
        });

        setUser(userData);
    }

    //LOGOUT
    const logout = ()=>{
        console.log('Cerrar sesión');
         localStorage.removeItem("user");
         setUser(null);
    }
    return(
        <UserContext.Provider value={{user, login, logout, register}}>
            {children}
        </UserContext.Provider>
    )
}

//Crear un Custom Hook para usar nuestro contexto de Usuario
//Se exporta para poder usarlo desde cualquier componente

export function usoUsuario(){
    return useContext(UserContext);
}