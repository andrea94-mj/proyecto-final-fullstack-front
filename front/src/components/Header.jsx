import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"; 
import { useUser } from "@/hooks/useUser"; 

const Header = () => {
    // Obtiene el estado de usuario y la función de logout del hook useUser
    const { user, logout } = useUser();

    return (
        <>
            <section className="Secction-header">
                <img className="Secction-img" src="/logo-buscamascotas.svg" alt="buscamascotas" /> 
                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li> 
                        <li><NavLink to="/perdidos" className="Header-li"><b>Perdidos</b></NavLink></li> 
                        <li><NavLink to="/encontrados" className="Header-li"><b>Encontrados</b></NavLink></li> 

                        {user ? (
                            <>
                            {/* Mostrar "Registrar Mascota" solo si el usuario NO es administrador */}
                            {user.role !== 'admin' && (
                                <li><NavLink to="/mascota" className="Header-li"><b>Registrar Mascota</b></NavLink></li>
                            )}
                            <div className="Usuario">
                                <li>
                                    <img className="Usuario-img" src={user.image} alt={user.username} />
                                </li>
                                <h3 className="Usuario-h3">{user.name}</h3>
                            </div>
                            <li><NavLink onClick={logout} className="Header-li--logout"><b>X</b></NavLink></li>
                            </>
                        ) : (
                            <>
                            <li><NavLink to="/acceso" className="Header-li"><b>Acceso</b></NavLink></li>
                            </>
                        )}
                        {/* Mostrar enlace al panel de administrador si el usuario es admin */}
                        {user && user.role === 'admin' && (
                            <li><NavLink to="/administrador" className="Header-li"><b>Panel Admin</b></NavLink></li>
                        )}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header;
