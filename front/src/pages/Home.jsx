import InfoCard from "../components/InfoCard";
import "@/css/Home.css";
import img_home from "@/assets/img_home.jpg"

const Home = () =>{



    return(
        <>
        <header className="Header-home">
            <img className="Header-img" src={img_home} alt="imagen_principal" />
            <h1 className="Header-h1"><b>¿Quiénes somos?</b></h1>
        </header>
        <section className="Section-home">
        <div className="Section-info">
        <h2></h2>
        <p></p>
        </div>
        <div className="Section-info">
        <h2></h2>
        <p></p>
        </div>
        <div className="Section-info">
        <h2></h2>
        <p></p>
        </div>
        </section>
        </>
    )
}

export default Home