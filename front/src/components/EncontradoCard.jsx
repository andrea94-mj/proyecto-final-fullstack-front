import {useState } from "react";
import "@/css/Card.css";

const EncontradoCard = ({imagen, tipo_de_animal, raza, color, genero, lugar_encontrado, fecha_encontrado, contacto_nombre, contacto_telefono}) =>{

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
                        <p className="Card-p">Me han encontrado en: <b>{lugar_encontrado}</b></p>
                        <p className="Card-p">El día: <b>{fecha_encontrado}</b></p>
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

export default EncontradoCard