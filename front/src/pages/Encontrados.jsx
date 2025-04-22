import { useEffect, useState } from "react";
import EncontradoCard from "@/components/EncontradoCard";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router-dom";
import "@/css/encontrados.css";

// Componente para mostrar el catálogo de mascotas encontradas
const Encontrados = () => {

    const URL = import.meta.env.VITE_API_URL;

    const [catalogo, setCatalogo] = useState([]); // Estado para almacenar el catálogo de mascotas
    const [errorData, setErrorData] = useState(""); // Estado para gestionar mensajes de error
    const { user } = useUser(); // Obtiene el usuario actual para verificar si está logueado

    useEffect(() => {
        getCatalogo(`${URL}/encontrados`); // Carga el catálogo al montar el componente
    }, []);

    // Función para obtener el catálogo de mascotas desde la API
    const getCatalogo = async (url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();

        if (objeto.error) {
            setErrorData("No se han encontrado resultados");
            setCatalogo([]);
        } else {
            setErrorData("");
            setCatalogo(objeto.data); // Almacena los datos obtenidos en el catálogo
        }
    };

    return (
        <>
            <header className="Header-encontrados">
                <h1 className="Encontrados-h1">Mascotas Encontradas</h1>
                <p className="Encontrados-p">
                    Estas son las mascotas que han sido encontradas y están esperando reunirse con sus dueños.
                    Si reconoces a alguna de ellas, no dudes en ponerte en contacto para que puedan volver a casa lo antes posible.
                </p>
            </header>

            {/* Botón para registrar una mascota encontrada */}
            <div>
                <Link to="/mascota"><button>Pulsa aquí para registrar la mascota que te has encontrado</button></Link>
            </div>

            <section className="Encontrados-container">
                {errorData ? (
                    <p>{errorData}</p> // Muestra mensaje de error si no hay resultados
                ) : (
                    catalogo.map((catalogo) => (
                        <EncontradoCard key={catalogo._id} {...catalogo} isLoggedIn={!!user} />
                    ))
                )}
            </section>
        </>
    );
}

export default Encontrados;
