import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section className="Secction-header">
                <h1 className="Header-h1"><b>BuscaMascotas</b></h1>
                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li>
                        <li><NavLink to="/encontrados" className="Header-li"><b>Encontrados</b></NavLink></li>
                        <li><NavLink to="/perdidos" className="Header-li"><b>Perdidos</b></NavLink></li>
                        <li><NavLink to="/blog" className="Header-li"><b>Blog</b></NavLink></li>
                        <li><NavLink to="/registro" className="Header-li"><b>Registro</b></NavLink></li>
                        <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header