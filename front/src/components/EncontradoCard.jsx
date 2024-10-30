import { useState } from "react";

//importo función para formatear la fecha y que salga en el formato correcto
import { format } from "date-fns";
import "@/css/Card.css";

const EncontradoCard = ({imagen, tipo_de_animal, raza, color, genero, lugar_encontrado, fecha_encontrado, contacto_nombre, contacto_telefono}) => {
    const [mostrarContacto, setMostrarContacto] = useState(false); 

    const isActive = tipo_de_animal === "Gato" ? "Card isActive" : "Card";

    // Formatea la fecha para mostrar solo 'yyyy-MM-dd'
    const fechaFormateada = format(new Date(fecha_encontrado), 'yyyy-MM-dd');

    const toggleContacto = () => {
        setMostrarContacto(!mostrarContacto);
    };

    return (
        <>
            <div className="Card">
                <section className={isActive}>
                    <header className="Header-card">
                    <img className="Card-img" src={`/uploads/${imagen}`} alt={tipo_de_animal} />
                    </header>
                    <div className="Card-info">
                        <p className="Card-p">Soy un: <b>{tipo_de_animal}</b></p>
                        <p className="Card-p">Mi raza es: <b>{raza ? raza : "Raza desconocida"}</b></p>
                        <p className="Card-p">Soy de color: <b>{color}</b></p>
                        <p className="Card-p">Género: <b>{genero}</b></p>
                        <p className="Card-p">Me han encontrado en: <b>{lugar_encontrado}</b></p>
                        <p className="Card-p">El día: <b>{fechaFormateada}</b></p>

                        <button className="Card-btn" onClick={toggleContacto}>Contacto
                        </button>
                        {mostrarContacto && (
                            <p className="Card-p--contacto">
                                Encontrado por: <b>{contacto_nombre}</b><br />Teléfono: <b>{contacto_telefono}</b>
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default EncontradoCard;
