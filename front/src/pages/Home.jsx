import { Link } from "react-router-dom";

// CSS
import "@/css/Home.css";

//Imágenes
import img_home from "@/assets/img_home.jpg";
import icono_patitacirculo from "@/assets/icono_patitacirculo.svg";
import icono_patita from "@/assets/icono_patita.svg";
import icono_patitacorazon from "@/assets/icono_patitacorazon.svg";


const Home = () => {



    return (
        <>
            <header className="Header-home">
                <img className="Header-img" src={img_home} alt="imagen_principal" />
                <h1 className="Header-h1"><b>¿Cómo podemos ayudarte?</b></h1>
            </header>
            <section className="Section-home">
                <div className="Section-info">
                    <img className="Secction-icono" src={icono_patitacirculo} alt="patita_circulo" />
                    <h2 className="Secction-h2"><b>¿Quiénes somos?</b></h2>
                    <p className="Secction-p">En BuscaMascotas, nuestro objetivo es ayudar a las personas a encontrar a sus mascotas perdidas
                        y a conectar con aquellos que hayan encontrado animales extraviados. Somos una comunidad comprometida
                        con el bienestar de los animales, donde cualquier persona puede reportar la pérdida de su mascota o informar
                        sobre animales encontrados para facilitar su reencuentro. <br />Este proyecto nació con la finalidad de
                        proporcionar una plataforma sencilla y efectiva para que los dueños de mascotas puedan buscar y encontrar
                        a sus compañeros perdidos, y para que aquellos que encuentren animales extraviados puedan reportarlos. Juntos,
                        podemos hacer que estos momentos difíciles tengan un final feliz, ayudando a reducir el tiempo de separación y
                        aumentando las posibilidades de reencuentro.</p>
                </div>
                <div className="Section-info">
                    <img className="Secction-icono" src={icono_patita} alt="patita" />
                    <h2 className="Secction-h2"><b>¿Qué hacer si has perdido a tu mascota?</b></h2>
                    <p className="Secction-p">Si has perdido a tu mascota, es importante actuar con rapidez. Comienza buscándola en los
                        alrededores de donde se extravió y amplía tu búsqueda por las zonas cercanas. A continuación, visita nuestra sección
                        de animales <b><Link to="/perdidos">perdidos</Link></b>, donde podrás verificar si alguno de nuestros usuarios ha
                        encontrado a tu mascota. Si es así, podrás ponerte en contacto con ellos para facilitar el reencuentro. <br />En caso
                        de que no encuentres información
                        en nuestra plataforma, te recomendamos informar a los veterinarios y protectoras de animales de la zona. Además, es útil
                        colocar carteles con una foto y los datos de tu mascota en los alrededores de tu domicilio. No olvides seguir visitando
                        nuestra página, ya que en cualquier momento uno de nuestros usuarios podría reportar haber visto a tu mascota.</p>
                </div>
                <div className="Section-info">
                    <img className="Secction-icono" src={icono_patitacorazon} alt="patita_corazon" />
                    <h2 className="Secction-h2"><b>¿Qué hacer si has encontrado una mascota?</b></h2>
                    <p className="Secction-p">Si has encontrado una mascota perdida, lo más importante es asegurarse de que esté a salvo. Verifica si lleva alguna
                        identificación, como una placa o microchip, que pueda ayudar a localizar a su dueño. A continuación, publica un anuncio
                        en nuestra sección de animales <b><Link to="/encontrados">encontrados</Link></b>, detallando el lugar y las circunstancias
                        en las que hallaste a la mascota. Esto permitirá que el dueño pueda ponerse en contacto contigo rápidamente. <br />Además,
                        te sugerimos informar a los veterinarios y protectoras de animales cercanas, ya que el propietario podría haber dejado aviso
                        allí. Si es posible, cuida de la mascota mientras se busca a su dueño, y sigue visitando nuestra página para estar al tanto
                        de cualquier actualización relacionada con su pérdida.</p>
                </div>
            </section>
        </>
    )
}

export default Home