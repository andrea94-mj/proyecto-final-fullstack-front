import { createContext, useContext, useState} from "react";
import { usoUsuario } from "@/hooks/usoUsuario";

const FormAcceso = () =>{

        const [formData, setFormData] = useState({
            username: "",
            password:"",
            //info que debería venir del backend
            name: "Andrea",
            image:"https://picsum.photos/200"
        });
    
        //funcion para actualizar el formdata
        const handleChange = (e) =>{
            const {name, value} = e.target; //deconstruccion
            setFormData({  //actualiza el valor de formData
                ...formData,  //spread, hace una copia del formData 
                [name] : value  //elijo el índice a modificar de formData (en este caso name, es ussername y password del formulario)
            });
        };
    
        const {login} = usoUsuario();
    
        //funcion para enviar el formulario
        const handleSubmit = (e) =>{
            e.preventDefault(); //con este evento, hacemos que no aparezca la info de usuario y contraseña en la url 
            login(formData);
        };
    
    
        return(
            <>
            <article className="Article-form">
            <p className='Form-p'>Accede a tu cuenta para publicar si has perdido/encontrado una mascota e interactuar con los usuarios:</p>
            <form className="Form-acceso" onSubmit={handleSubmit} >
            <h2>Accede a tu cuenta</h2>
            <input onChange={handleChange} value={formData.username} type="email" name="username" placeholder="Usuario" required/>
            <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Contraseña" required/>
            <input type="submit" value="Acceder" />
    
            </form>
            </article>
            </>
    );
}

export default FormAcceso