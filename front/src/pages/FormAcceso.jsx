import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "@/hooks/useUser";


import "@/css/Forms.css";

const FormAcceso = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
       
    });

    //funcion para actualizar el formdata
    const handleChange = (e) => {
        const { name, value } = e.target; //deconstruccion
        setFormData({  //actualiza el valor de formData
            ...formData,  //spread, hace una copia del formData 
            [name]: value  //elijo el índice a modificar de formData (en este caso name, es ussername y password del formulario)
        });
    };

    const { login } = useUser();
    const navigate = useNavigate();

    //funcion para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); //con este evento, hacemos que no aparezca la info de usuario y contraseña en la url 
        login(formData);
        navigate("/");
    };


    return (
        <>
            <article className="Article-form">
                <p className='Form-p'>Accede a tu cuenta para publicar si has perdido/encontrado una mascota e interactuar con los usuarios:</p>
                <form className="Form-acceso" onSubmit={handleSubmit} >

                    <label htmlFor="email">E-mail: </label>
                    <input onChange={handleChange} id="email" value={formData.username} type="email" name="username" placeholder="E-mail" required />

                    <label htmlFor="contraseña">Contraseña: </label>
                    <input onChange={handleChange} id="contraseña" value={formData.password} type="password" name="password" placeholder="Contraseña" required />

                    <input type="submit" value="Acceder" />
                </form>
            </article>
        </>
    );
}

export default FormAcceso