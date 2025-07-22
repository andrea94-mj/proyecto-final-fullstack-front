import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"; 
import { useUser } from "@/hooks/useUser"; 

const Header = () => {
    // Obtiene el estado de usuario y la función de logout del hook useUser
    const { user, logout } = useUser();

    return (
        <>
            <section className="secction-header">
                <img className="secction-img" src="/logo-buscamascotas.svg" alt="buscamascotas" loading="lazy" /> 
                <nav className="header-nav">
                    <ul className="header-ul">
                        <li><NavLink to="/" className="header-li"><b>Inicio</b></NavLink></li> 
                        <li><NavLink to="/perdidos" className="header-li"><b>Perdidos</b></NavLink></li> 
                        <li><NavLink to="/encontrados" className="header-li"><b>Encontrados</b></NavLink></li> 

                        {user ? (
                            <>
                            {/* Mostrar "Registrar Mascota" solo si el usuario NO es administrador */}
                            {user.role !== 'admin' && (
                                <li><NavLink to="/mascota" className="header-li"><b>Registrar Mascota</b></NavLink></li>
                            )}
                            <div className="usuario">
                                <li>
                                    <img className="usuario-img" src={user.image} alt={user.username} />
                                </li>
                                <h3 className="usuario-h3">{user.name}</h3>
                            </div>
                            <li><NavLink onClick={logout} className="header-li--logout"><b>X</b></NavLink></li>
                            </>
                        ) : (
                            <>
                            <li><NavLink to="/acceso" className="header-li"><b>Acceso</b></NavLink></li>
                            </>
                        )}
                        {/* Mostrar enlace al panel de administrador si el usuario es admin */}
                        {user && user.role === 'admin' && (
                            <li><NavLink to="/administrador" className="header-li"><b>Admin</b></NavLink></li>
                        )}
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header;
