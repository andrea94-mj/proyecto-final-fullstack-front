import { useEffect, useState } from "react";
import PerdidoCard from "../components/PerdidoCard";

import "@/css/Perdidos.css"

const Perdidos = () =>{

    const [catalogo, setCatalogo] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(()=>{
        getCatalogo('/json/perdidos.json');
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
        <header className="Header-perdidos">
        <h1 className="Perdidos-h1">Mascotas Perdidas</h1>
        <p className="Perdidos-p">En esta sección podrás ver las mascotas que han sido reportadas como perdidas. <br />Si tienes información sobre alguna de ellas, por favor contacta con la persona indicada.</p>
        </header>
        <section className="Perdidos-container">
            
                {
                    catalogo.map((catalogo) =>(
                        <PerdidoCard key={catalogo.id} {...catalogo}/>
                    ))
                }
    
        </section>
        </>
    );
}

export default Perdidos