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
        try {
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
        } catch (error) {
            setErrorData("Error al cargar los datos. Inténtalo de nuevo.");
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <header className="Header-perdidos">
                <h1 className="Perdidos-h1">Mascotas Perdidas</h1>
                <p className="Perdidos-p">
                    En esta sección podrás ver las mascotas que han sido reportadas como perdidas.
                    Si tienes información sobre alguna de ellas, por favor contacta con la persona indicada.
                </p>
            </header>

            {/* Botón para registrar una mascota perdida */}
            <div className="registro-mascota-btn">
                <Link to="/mascota"><button>Registrar mascota perdida</button></Link>
            </div>

            <section className="Perdidos-container">
                {/* Mostrar mensaje de error o catálogo de mascotas perdidas */}
                {errorData ? (
                    <p className="mensaje-error">{errorData}</p>
                ) : catalogo.length === 0 ? (
                    <p className="cargando-datos">Cargando datos...</p>
                ) : (
                    catalogo.map((mascota) => (
                        <PerdidoCard key={mascota._id} {...mascota} isLoggedIn={!!user} />
                    ))
                )}
            </section>
        </>
    );
}

export default Perdidos;

