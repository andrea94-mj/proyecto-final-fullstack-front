import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"; 
import { useUser } from "@/hooks/useUser"; 
import logo_buscamascotas from "@/assets/logo_buscamascotas.svg" 

const Header = () => {

    // Obtiene el estado de usuario y la función de logout del hook useUser
    const { user, logout } = useUser();

    return (
        <>
            <section className="Secction-header">
                <img className="Secction-img" src={logo_buscamascotas} alt="buscamascotas" /> 
                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li> 
                        <li><NavLink to="/perdidos" className="Header-li"><b>Perdidos</b></NavLink></li> 
                        <li><NavLink to="/encontrados" className="Header-li"><b>Encontrados</b></NavLink></li> 

                        {user ? (
                            <>
                            {/* Si el usuario está logueado, muestra las opciones correspondientes */}
                            <li><NavLink to="/mascota" className="Header-li"><b>Registrar Mascota</b></NavLink></li> {/* Enlace para registrar una nueva mascota */}
                            <div className="Usuario">
                                <li>
                                    <img className="Usuario-img" src={user.image} alt={user.username} /> {/* Muestra la imagen de perfil del usuario */}
                                </li>
                                <h3 className="Usuario-h3">{user.name}</h3> {/* Muestra el nombre del usuario */}
                            </div>
                            <li><NavLink onClick={logout} className="Header-li--logout">Salir</NavLink></li> {/* Enlace para cerrar sesión */}
                            </>
                        ) : (
                            <>
                            {/* Si el usuario no está logueado, muestra el enlace de acceso */}
                            <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li> {/* Enlace a la página de acceso */}
                            </>
                        )}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header;
