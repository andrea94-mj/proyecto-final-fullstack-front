import { useEffect, useState } from "react";
import PerdidoCard from "../components/PerdidoCard";

import "@/css/Perdidos.css"

const Perdidos = () =>{

    const URL = import.meta.env.VITE_API_URL;

    const [catalogo, setCatalogo] = useState([]);
    const [errorData, setErrorData] = useState("");

    useEffect(()=>{
        getCatalogo(`${URL}/perdidos`);
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
        <header className="Header-perdidos">
        <h1 className="Perdidos-h1">Mascotas Perdidas</h1>
        <p className="Perdidos-p">En esta sección podrás ver las mascotas que han sido reportadas como perdidas. <br />Si tienes información sobre alguna de ellas, por favor contacta con la persona indicada.</p>
        </header>
        <section className="Perdidos-container">
            
                {
                    catalogo.map((catalogo) =>(
                        <PerdidoCard key={catalogo._id} {...catalogo}/>
                    ))
                }
    
        </section>
        </>
    );
}

export default Perdidos