import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { format } from "date-fns"; 
import "@/css/Card.css"; 

// Componente para mostrar la tarjeta de una mascota encontrada
const EncontradoCard = ({ imagen, tipo_de_animal, raza, color, genero, lugar_encontrado, fecha_encontrado, contacto_nombre, contacto_telefono, isLoggedIn }) => {

    const [mostrarContacto, setMostrarContacto] = useState(false); // Estado para controlar si mostrar la información de contacto
    const [mostrarAlerta, setMostrarAlerta] = useState(false); // Estado para mostrar alerta si el usuario no está logueado

    const URL_IMG = import.meta.env.VITE_BACKEND || 'http://localhost:3000'; // URL para la imagen
    
    const isActive = tipo_de_animal === "Gato" ? "card isActive" : "card";

    // Formatea la fecha de la mascota encontrada
    const fechaFormateada = format(new Date(fecha_encontrado), 'yyyy-MM-dd');

    // Función para alternar la visibilidad de la información de contacto
    const toggleContacto = () => {
        if (isLoggedIn) {
            setMostrarContacto(!mostrarContacto); // Muestra u oculta la información de contacto si el usuario está logueado
        } else {
            setMostrarAlerta(true); // Muestra una alerta si el usuario no está logueado
        }
    };



    return (
        <>
            <div className="card">
                <section className={isActive}> 
                    <header className="header-card">
                        <img className="card-img" src={`${URL_IMG}/uploads/${imagen}`} alt={tipo_de_animal} loading="lazy"/>
                    </header>
                    <div className="card-info">
                        <p className="card-p"><b>{tipo_de_animal}</b></p> 
                        <p className="card-p">Mi raza es: <b>{raza ? raza : "Raza desconocida"}</b></p> 
                        <p className="card-p">Soy de color: <b>{color}</b></p> 
                        <p className="card-p">Género: <b>{genero}</b></p> 
                        <p className="card-p">Me han encontrado en: <b>{lugar_encontrado}</b></p> 
                        <p className="card-p">El día: <b>{fechaFormateada}</b></p> 

                        {/* Botón para mostrar la información de contacto */}
                        <button className="card-btn" onClick={toggleContacto}>Contacto</button>

                        {/* Muestra los detalles de contacto si el usuario está logueado */}
                        {mostrarContacto && (
                            <p className="card-p--contacto">
                                Encontrado por: <b>{contacto_nombre}</b><br />Teléfono: <b>{contacto_telefono}</b>
                            </p>
                        )}

                        {/* Muestra una alerta si el usuario no está logueado */}
                        {mostrarAlerta && (
                            <div className="card-alerta">
                                <p>Debes estar registrado para ver esta información</p>
                                {/* Enlace para que el usuario se registre */}
                                <Link className="card-alerta--link" to="/registro"><b>Regístrate aquí</b></Link>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default EncontradoCard;

