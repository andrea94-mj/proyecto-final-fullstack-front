import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from "@/hooks/useUser";
import "@/css/Forms.css";

// Componente para el formulario de inicio de sesión
const FormAcceso = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    
    // Estado para manejar errores de autenticación
    const [error, setError] = useState("");

    // Función para actualizar el estado formData con los datos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target; // Desestructuración del evento
        setFormData({
            ...formData, // Hace copia de formData existente
            [name]: value // Actualiza el campo específico de formData
        });
    };

    const { login } = useUser();
    const navigate = useNavigate();

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Hace que la información del formulario no aparezca en la URL
        
        try {
            // Asumimos que login ahora devuelve una promesa o tiene un callback
            const result = await login(formData);
            
            // Si el login es exitoso, navegamos a la página principal
            if (result && result.success) {
                navigate("/");
            } else {
                // Si hay un mensaje específico de error, lo usamos
                setError(result?.message || "Usuario no registrado o credenciales incorrectas");
            }
        } catch (err) {
            // Capturamos cualquier error en el proceso de login
            setError("Error en el inicio de sesión. Por favor, inténtalo de nuevo.");
            console.error("Error durante el login:", err);
        }
    };

    return (
        <>
            <article className="Article-form">
                <p className='Form-p'>Accede a tu cuenta para publicar si has perdido/encontrado una mascota e interactuar con los usuarios:</p>
                <form className="Form-acceso" onSubmit={handleSubmit} >

                    {/* Mensaje de error */}
                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

                    {/* Campo de email */}
                    <label htmlFor="email">E-mail: </label>
                    <input onChange={handleChange} id="email" value={formData.username} type="email" name="username" placeholder="E-mail" required />

                    {/* Campo de contraseña */}
                    <label htmlFor="contraseña">Contraseña: </label>
                    <input onChange={handleChange} id="contraseña" value={formData.password} type="password" name="password" placeholder="Contraseña" required />

                    {/* Botón de envío */}
                    <button type='submit' value="acceder">Acceso</button>
                </form>

                {/* Enlace para registrarse si no se tiene una cuenta */}
                <p className="Form-p--acceso">¿Todavía no tienes cuenta con nosotros? <br /> <Link to="/registro"><b>Regístrate aquí</b></Link></p>
            </article>
        </>
    );
}

export default FormAcceso;
