import { useEffect, useState } from "react";
import EncontradoCard from "../components/EncontradoCard";

import "@/css/Encontrados.css";


const Encontrados = () =>{

    const [catalogo, setCatalogo] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(()=>{
        getCatalogo('/json/encontrados.json');
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
        setCatalogo(objeto.results);
        
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
                        <EncontradoCard key={catalogo.id} {...catalogo}/>
                    ))
                }
    
        </section>
        </>
    );
}

export default Encontrados