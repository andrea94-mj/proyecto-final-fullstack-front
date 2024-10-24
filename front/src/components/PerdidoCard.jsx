import { useState } from "react";
import "@/css/Card.css";

const PerdidoCard = ({ imagen, nombre, tipo_de_animal, raza, color, genero, ultima_vez_visto, contacto }) => {

    const [mostrarContacto, setMostrarContacto] = useState(false); 

    const isActive = nombre === "Max" ? "Card isActive" : "Card";

    
    const toggleContacto = () => {
        setMostrarContacto(!mostrarContacto);
    };

    return (
        <>
            <div className="Card">
                <section className={isActive}>
                    <header className="Header-card">
                        <img className="Card-img" src={imagen} alt={nombre} />
                        <h1 className="Card-h1"><b>{nombre}</b></h1>
                    </header>
                    <div className="Card-info">
                        <p className="Card-p">Soy un: <b>{tipo_de_animal}</b></p>
                        <p className="Card-p">Mi raza es: <b>{raza ? raza : "Raza desconocida"}</b></p>
                        <p className="Card-p">Soy de color: <b>{color}</b></p>
                        <p className="Card-p">Género: <b>{genero}</b></p>
                        <p className="Card-p">Me han visto la última vez en: <b>{ultima_vez_visto.lugar}</b></p>
                        <p className="Card-p">El día: <b>{ultima_vez_visto.fecha}</b></p>
                        <button className="Card-btn" onClick={toggleContacto}>Contacto
                        </button>
                        {mostrarContacto && (
                            <p className="Card-p--contacto">
                                Dueño: <b>{contacto.nombre}</b><br />Teléfono: <b>{contacto.telefono}</b>
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default PerdidoCard;
