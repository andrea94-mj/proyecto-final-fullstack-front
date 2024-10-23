import {useState } from "react";
import "@/css/Card.css";

const EncontradoCard = ({imagen, tipo_de_animal, raza, color, genero, encontrado, contacto}) =>{

    const [mostrarContacto, setMostrarContacto] = useState(false); 

    const isActive = tipo_de_animal === "Suricata" ? "Card isActive" : "Card";

    
    const toggleContacto = () => {
        setMostrarContacto(!mostrarContacto);
    };

    return (
        <>
            <div className="Card">
                <section className={isActive}>
                    <header className="Header-card">
                        <img className="Card-img" src={imagen} alt={tipo_de_animal} />
                    </header>
                    <div className="Card-info">
                        <p className="Card-p">Soy un: <b>{tipo_de_animal}</b></p>
                        <p className="Card-p">Mi raza es: <b>{raza ? raza : "Raza desconocida"}</b></p>
                        <p className="Card-p">Soy de color: <b>{color}</b></p>
                        <p className="Card-p">Género: <b>{genero}</b></p>
                        <p className="Card-p">Me han encontrado en: <b>{encontrado.lugar}</b></p>
                        <p className="Card-p">El día: <b>{encontrado.fecha}</b></p>
                        <button className="Card-btn" onClick={toggleContacto}>Contacto
                        </button>
                        {mostrarContacto && (
                            <p className="Card-p--contacto">
                                Encontrado por: <b>{contacto.nombre}</b><br />Teléfono: <b>{contacto.telefono}</b>
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default EncontradoCard