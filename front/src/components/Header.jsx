import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

import logo_buscamascotas from "@/assets/logo_buscamascotas.svg"


const Header = () => {

    const { user, logout, login, register } = useUser();

    return (
        <>
            <section className="Secction-header">
                <img className="Secction-img" src={logo_buscamascotas} alt="buscamascotas" />
                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li>
                        <li><NavLink to="/perdidos" className="Header-li"><b>Perdidos</b></NavLink></li>
                        <li><NavLink to="/encontrados" className="Header-li"><b>Encontrados</b></NavLink></li>
                        {/* <li><NavLink to="/administrador" className="Header-li"><b>P. Admin</b></NavLink></li> */}

                        {user ? (
                            <>
                            <li><NavLink to="/blog" className="Header-li"><b>Blog</b></NavLink></li>
                            <div className="Usuario">
                                <li>
                                <img className="Usuario-img" src={user.image} alt={user.username} />
                                </li>
                                <h3 className="Usuario-h3">{user.name}</h3>
                            </div>
                            <li><NavLink onClick={logout} className="Header-li--logout">Salir</NavLink></li>
                            </>
                        ) : (
                            <>
                            <li><NavLink to="/registro" className="Header-li"><b>Registro</b></NavLink></li>
                            <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li>
                            </>
                        )}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header