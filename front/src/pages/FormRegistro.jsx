import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';
import "@/css/forms.css";

// Componente de formulario de registro de usuario
const FormRegistro = () => {
    // Estado para habilitar el botón de envío solo cuando todos los datos son válidos
    const [canSubmit, setCanSubmit] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        tyc: false, // términos y condiciones
        image: "https://picsum.photos/200"
    });

    // useEffect para actualizar canSubmit si todos los campos requeridos están completos
    useEffect(() => {
        setCanSubmit(formData.name && formData.username && formData.password && formData.tyc);
    }, [formData]);

    // Función para actualizar los datos del formulario al cambiar cualquier campo
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const { register } = useUser();
    const navigate = useNavigate(); // Para redireccionar tras el registro

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData); // Registra al usuario
        navigate("/"); // Redirige a la página principal
        console.log(formData);
    };

    return (
        <>
            <article className='Article-form'>
                <p className='Form-p'>Si todavía no tienes cuenta con nosotros, regístrate con estos sencillos pasos para acceder a más contenido</p>
                <form className='Form-registro' onSubmit={handleSubmit}>

                    {/* Campo de nombre */}
                    <label htmlFor="nombre">Escribe tu nombre: </label>
                    <input onChange={handleChange} id='nombre' value={formData.name} type="text" name="name" placeholder='Nombre' />

                    {/* Campo de email */}
                    <label htmlFor="email">Escribe tu email:</label>
                    <input onChange={handleChange} id='email' value={formData.username} type="email" name="username" placeholder="Email" />

                    {/* Campo de contraseña */}
                    <label htmlFor="contraseña">Escribe tu contraseña:</label>
                    <input onChange={handleChange} id='contraseña' value={formData.password} type="password" name="password" placeholder="Contraseña" />

                    {/* Aceptación de términos y condiciones */}
                    <label htmlFor='tyc'><input type='checkbox' onChange={handleChange} name="tyc" checked={formData.tyc} />Acepto los términos y condiciones</label>

                    {/* Botón de registro o mensaje de advertencia */}
                    {canSubmit ? <button type='submit'>Registro</button>
                        : <p className='Submit-p'>Acepte los términos y condiciones para continuar</p>}
                    <br />
                </form>
            </article>
        </>
    );
}

export default FormRegistro;
