import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';

import "@/css/Forms.css";


const FormRegistro = () => {
    const [canSubmit, setCanSubmit] = useState(false); //para chequear que se introducen todas las propiedades en el formulario
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        tyc: false,
        image: "https://picsum.photos/200"
    });

    useEffect(()=>{
        setCanSubmit(formData.name && formData.username && formData.password && formData.tyc);
    }, [formData])

    
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };
    
    const { register } = useUser();
    const navigate = useNavigate(); //función para que nos lleve a otra página cuando se ejecuta

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
        navigate("/") //cuando terminas el registro, te lleva directamente a la página de home
        console.log(formData);
    };
    return (
        <>
            <article className='Article-form'>
                <p className='Form-p'>Si todavía no tienes cuenta con nosotros, regístrate con estos sencillos pasos para acceder a más contenido</p>
                <form className='Form-registro' onSubmit={handleSubmit}>

                    <label htmlFor="nombre">Escribe tu nombre: </label>
                    <input onChange={handleChange} id='nombre' value={formData.name} type="text" name="name" placeholder='Nombre' />

                    <label htmlFor="email">Escribe tu email:</label>
                    <input onChange={handleChange} id='email' value={formData.username} type="email" name="username" placeholder="Email" />

                    <label htmlFor="contraseña">Escribe tu contraseña:</label>
                    <input onChange={handleChange} id='contraseña' value={formData.password} type="password" name="password" placeholder="Contraseña" />

                    <label htmlFor='tyc'><input type='checkbox' onChange={handleChange} name="tyc" checked={formData.tyc} />Acepto los terminos y condiciones</label>

                    {canSubmit ? <button type='submit' >Registro</button> //Si no están todos los datos completos no te deja registrarte
                               : <p className='Submit-p'>Acepte los términos y condiciones para continuar</p>}
                <br />
                <pre>{JSON.stringify(formData, null, 2)}</pre>
                </form>
            </article>
        </>
    );
}

export default FormRegistro