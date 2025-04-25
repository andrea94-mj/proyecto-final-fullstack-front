import { createContext, useContext, useState, useEffect } from "react";

// Crear un contexto de usuario para compartir el estado en toda la aplicación
const UserContext = createContext();

// Proveedor de contexto de usuario que envuelve la aplicación y permite acceder a la autenticación en cualquier componente
export function UserProvider({ children }) {
    const [user, setUser] = useState(null); // Estado para almacenar el usuario logueado

    const { VITE_API_URL } = import.meta.env; // Variable de entorno para la URL de la API

    // Comprobar si el usuario ya está logueado 
    useEffect(() => {
        const storedUser = localStorage.getItem("user"); // Obtener el usuario de LocalStorage
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser)); // Actualiza el estado del usuario
            } catch (error) {
                console.error("Error al parsear el usuario almacenado:", error);
            }
        }
    }, []);

    // LOGIN
    const login = async (userData) => {
        try {
            // Petición al backend para iniciar sesión
            const response = await fetch(`${VITE_API_URL}/acceso`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                // Si la respuesta no es exitosa, devolver un objeto con la información del error
                const errorData = await response.json();
                return { 
                    success: false, 
                    message: errorData.message || "Usuario no registrado o credenciales incorrectas" 
                };
            }

            const responseData = await response.json(); // Respuesta con el usuario y el token
            const usuario = responseData.data;

            setUser(usuario); // Guardar el usuario en el estado
            localStorage.setItem("user", JSON.stringify(usuario)); // Guardar el usuario en LocalStorage
            localStorage.setItem('token', responseData.token); // Guardar el token JWT en LocalStorage

            // Devolver un objeto que indique que el login fue exitoso
            return { success: true };

        } catch (e) {
            console.error('Error:', e); 
            // Devolver un objeto con la información del error
            return { 
                success: false, 
                message: "Error en el servidor. Por favor, inténtalo más tarde." 
            }; 
        }
    };

    // REGISTER
    const register = async (userData) => {
        try {
            // Petición al backend para registrarse
            const response = await fetch(`${VITE_API_URL}/registro`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                // Si la respuesta no es exitosa, devolver un objeto con la información del error
                const errorData = await response.json();
                return { 
                    success: false, 
                    message: errorData.message || "Error al registrar el usuario" 
                };
            }
            
            const responseData = await response.json();
            const usuario = responseData.data;

            setUser(usuario); // Guardar el usuario en el estado
            localStorage.setItem('user', JSON.stringify(usuario)); // Guardar el usuario en LocalStorage
            localStorage.setItem('token', responseData.token); // Guardar el token JWT en LocalStorage

            // Devolver un objeto que indique que el registro fue exitoso
            return { success: true };
        } catch (e) {
            console.error('Error:', e);
            // Devolver un objeto con la información del error
            return { 
                success: false, 
                message: "Error en el servidor. Por favor, inténtalo más tarde." 
            };
        }
    };

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("user"); // Eliminar el usuario de LocalStorage
        localStorage.removeItem('token'); // Eliminar el token de LocalStorage
        setUser(null); // Reiniciar el estado del usuario
        console.log("User logged out");
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
}

// ADMIN


// Custom Hook para usar el contexto de usuario en otros componentes
export function useUser() {
    return useContext(UserContext);
}
