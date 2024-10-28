import { useEffect, useState } from "react";
import EncontradoCard from "../components/EncontradoCard";

import "@/css/Encontrados.css";


const Encontrados = () =>{

    const URL = import.meta.env.VITE_API_URL;

    const [catalogo, setCatalogo] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(()=>{
        getCatalogo(`${URL}/encontrados`);
    }, [])

    const getCatalogo = async (url) =>{
        const respuesta = await fetch(url);

        const objeto = await respuesta.json();
    

    if(objeto.error){
        setErrorData("No se han encontrado resultados");
        setCatalogo([]);
        
        return;
      }else{
        setErrorData("");
        setCatalogo(objeto.data);
        
      }
    };

    return(
        <>
        <header className="Header-encontrados">
        <h1 className="Encontrados-h1">Mascotas Encontradas</h1>
        <p className="Encontrados-p">Estas son las mascotas que han sido encontradas y están esperando reunirse con sus dueños.
         Si reconoces a alguna de ellas, no dudes en ponerte en contacto para que puedan volver a casa lo antes posible.</p>
        </header>
        <section className="Encontrados-container">
            
                {
                    catalogo.map((catalogo) =>(
                        <EncontradoCard key={catalogo._id} {...catalogo}/>
                    ))
                }
    
        </section>
        </>
    );
}

export default Encontrados