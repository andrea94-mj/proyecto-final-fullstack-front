import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



const Footer = () => {
    return (
        <>

            <section className="secction-footer">
                <nav className="footer-nav">
                    <ul>
                        <li><NavLink to="/" className="footer-li">Inicio</NavLink></li>
                        <li><NavLink to="/encontrados" className="footer-li">Encontrados</NavLink></li>
                        <li><NavLink to="/perdidos" className="footer-li">Perdidos</NavLink></li>
                        <li><NavLink to="/registro" className="footer-li">Registro</NavLink></li>
                        <li><NavLink to="/acceso" className="footer-li">Acceso</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <nav>
                        <ul className="footer-ul">
                            <li className="footer-li"><Link to="/">Aviso Legal</Link></li>
                            <li className="footer-li"><Link to="/">Política de privacidad</Link></li>
                            <li className="footer-li"><Link to="/">Política de cookies</Link></li>
                            <li><b><p className="footer-p">&copy; 2021 - 2025 BuscaMascotas</p></b></li>
                        </ul>
                    </nav>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-ul">
                        <li><a className="footer-a" href="https://www.facebook.com/?locale=es_ES" tittle="facebook" target="_blank" rel="noreferrer">
                            <img className="footer-img" src="/facebook.svg" alt="logo_facebook" loading="lazy" />
                        </a>
                        </li>
                        <li><a className="footer-a" href="https://www.instagram.com/?hl=es" title="instagram" target="_blank" rel="noreferrer">
                            <img className="footer-img" src="/instagram.svg" alt="logo_instagram" loading="lazy" />
                        </a>
                        </li>
                        <li><a className="footer-a" href="https://twitter.com/?lang=es" title="logo_x" target="_blank" rel="noreferrer">
                            <img className="footer-img" src="/x-logo.svg" alt="logo_x" loading="lazy" />
                        </a>
                        </li>
                    </ul>
                </nav>
            </section>


        </>
    )
}

export default Footer