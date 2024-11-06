import { useEffect, useState } from "react";
import PerdidoCard from "../components/PerdidoCard";
import { useUser } from "@/hooks/useUser";
import { Link } from 'react-router-dom'
import "@/css/Perdidos.css";

// Componente principal para mostrar la sección de mascotas perdidas
const Perdidos = () => {
    const URL = import.meta.env.VITE_API_URL;

    // Estado para almacenar el catálogo de mascotas y posibles errores
    const [catalogo, setCatalogo] = useState([]);
    const [errorData, setErrorData] = useState("");
    const { user } = useUser();

    // useEffect para obtener los datos del catálogo al cargar el componente
    useEffect(() => {
        getCatalogo(`${URL}/perdidos`);
    }, []);

    // Función asíncrona para obtener el catálogo de mascotas perdidas desde la API
    const getCatalogo = async (url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();

        // Manejo de errores en la respuesta de la API
        if (objeto.error) {
            setErrorData("No se han encontrado resultados");
            setCatalogo([]);
        } else {
            setErrorData("");
            setCatalogo(objeto.data);
        }
    };

    return (
        <>
            <header className="Header-perdidos">
                <h1 className="Perdidos-h1">Mascotas Perdidas</h1>
                <p className="Perdidos-p">
                    En esta sección podrás ver las mascotas que han sido reportadas como perdidas. <br />
                    Si tienes información sobre alguna de ellas, por favor contacta con la persona indicada.
                </p>
            </header>
            <div>
                {/* Botón para registrar una mascota perdida */}
                <Link to="/mascota"><button>Pulsa aquí para registrar a tu mascota perdida</button></Link>
            </div>
            <section className="Perdidos-container">
                {/* Mostrar mensaje de error o catálogo de mascotas perdidas */}
                {errorData ? (
                    <p>{errorData}</p>
                ) : (
                    catalogo.map((catalogo) => (
                        <PerdidoCard key={catalogo._id} {...catalogo} isLoggedIn={!!user} />
                    ))
                )}
            </section>
        </>
    );
}

export default Perdidos;

