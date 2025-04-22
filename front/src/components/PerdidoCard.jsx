import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { format } from "date-fns"; 
import "@/css/Card.css"; 

// Componente para mostrar la tarjeta de una mascota perdida
const PerdidoCard = ({ imagen, nombre, tipo_de_animal, raza, color, genero, lugar_perdido, fecha_perdido, contacto_nombre, contacto_telefono, isLoggedIn }) => {
  

  const [mostrarContacto, setMostrarContacto] = useState(false); // Estado para controlar si mostrar la información de contacto
  const [mostrarAlerta, setMostrarAlerta] = useState(false); // Estado para mostrar alerta si el usuario no está logueado

  const isActive = nombre === "Max" ? "Card isActive" : "Card";
  
  // Formatea la fecha de la mascota perdida
  const fechaFormateada = format(new Date(fecha_perdido), 'yyyy-MM-dd');

  // Función para alternar la visibilidad de la información de contacto
  const toggleContacto = () => {
    if (isLoggedIn) {
      setMostrarContacto(!mostrarContacto); // Muestra u oculta los datos de contacto si está logueado
    } else {
      setMostrarAlerta(true); // Muestra la alerta si no está logueado
    }
  };

  return (
    <div className="Card">
      <section className={isActive}>
        <header className="Header-card">
          <img className="Card-img" src={imagen} alt={nombre} /> 
          {/* <img className="Card-img" src={"/uploads/"} alt={tipo_de_animal} /> */}
          {/* La línea comentada sería una opción para mostrar la imagen desde el backend */}
          <h1 className="Card-h1"><b>{nombre}</b></h1> 
        </header>
        <div className="Card-info">
          <p className="Card-p"><b>{tipo_de_animal}</b></p> 
          <p className="Card-p">Mi raza es: <b>{raza || "Raza desconocida"}</b></p>
          <p className="Card-p">Soy de color: <b>{color}</b></p> 
          <p className="Card-p">Género: <b>{genero}</b></p> 
          <p className="Card-p">Me han visto la última vez en: <b>{lugar_perdido}</b></p> 
          <p className="Card-p">El día: <b>{fechaFormateada}</b></p> 
           {/* Botón para mostrar la información de contacto */}
          <button className="Card-btn" onClick={toggleContacto}>Contacto</button>

          {/* Muestra los detalles de contacto si el usuario está logueado */}
          {mostrarContacto && (
            <p className="Card-p--contacto">
              Dueño: <b>{contacto_nombre}</b><br />Teléfono: <b>{contacto_telefono}</b>
            </p>
          )}

          {/* Muestra una alerta si el usuario no está logueado */}
          {mostrarAlerta && (
            <div className="Card-alerta">
              <p>Debes estar registrado para ver esta información</p>
              {/* Enlace para que el usuario se registre */}
              <Link className="Card-alerta--link" to="/registro"><b>Regístrate aquí</b></Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PerdidoCard;



