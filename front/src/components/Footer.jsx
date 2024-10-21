import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <section className="Secction-footer">
                <nav className="Footer-nav">
                    <ul className="Footer-ul">
                        <li><NavLink to="/" className="Footer-li">Inicio</NavLink></li>
                        <li><NavLink to="/encontrados" className="Footer-li">Encontrados</NavLink></li>
                        <li><NavLink to="/perdidos" className="Footer-li">Perdidos</NavLink></li>
                        <li><NavLink to="/blog" className="Footer-li">Blog</NavLink></li>
                        <li><NavLink to="/registro" className="Footer-li">Registro</NavLink></li>
                        <li><NavLink to="/acceso" className="Footer-li">Acceso</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <nav>
                        <ul>
                            <li>Aviso Legal</li>
                            <li>Política de privacidad</li>
                            <li>Poítica de cookies</li>
                        </ul>
                    </nav>
                    <p className="Footer-p">&copy; 2021-2024 BucaMascotas</p>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>
            </section>


        </>
    )
}

export default Footer