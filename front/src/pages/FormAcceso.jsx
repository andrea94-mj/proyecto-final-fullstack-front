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
    const handleSubmit = (e) => {
        e.preventDefault(); // Hace que la información del formulario no aparezca en la URL
        login(formData); // Inicia sesión con los datos ingresados
        navigate("/"); // Redirige a la página principal después del inicio de sesión
    };

    return (
        <>
            <article className="Article-form">
                <p className='Form-p'>Accede a tu cuenta para publicar si has perdido/encontrado una mascota e interactuar con los usuarios:</p>
                <form className="Form-acceso" onSubmit={handleSubmit} >

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
