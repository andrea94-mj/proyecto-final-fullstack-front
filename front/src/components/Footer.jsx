import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import x_logo from '@/assets/x_logo.svg';


const Footer = () => {
    return (
        <>

            <section className="Secction-footer">
                <nav className="Footer-nav">
                    <ul>
                        <li><NavLink to="/" className="Footer-li">Inicio</NavLink></li>
                        <li><NavLink to="/encontrados" className="Footer-li">Encontrados</NavLink></li>
                        <li><NavLink to="/perdidos" className="Footer-li">Perdidos</NavLink></li>
                        <li><NavLink to="/registro" className="Footer-li">Registro</NavLink></li>
                        <li><NavLink to="/acceso" className="Footer-li">Acceso</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <nav>
                        <ul className="Footer-ul">
                            <li className="Footer-li"><Link to="/">Aviso Legal</Link></li>
                            <li className="Footer-li"><Link to="/">Política de privacidad</Link></li>
                            <li className="Footer-li"><Link to="/">Política de cookies</Link></li>
                            <li><b><p className="Footer-p">&copy; 2021 - 2024 BuscaMascotas</p></b></li>
                        </ul>
                    </nav>
                </div>
                <nav className="Footer-nav">
                    <ul className="Footer-ul">
                        <li><a className="Footer-a" href="https://www.facebook.com/?locale=es_ES" tittle="facebook" target="_blank" rel="noreferrer">
                            <img className="Footer-img" src={facebook} alt="logo_facebook" loading="lazy" />
                        </a>
                        </li>
                        <li><a className="Footer-a" href="https://www.instagram.com/?hl=es" title="instagram" target="_blank" rel="noreferrer">
                            <img className="Footer-img" src={instagram} alt="logo_instagram" loading="lazy" />
                        </a>
                        </li>
                        <li><a className="Footer-a" href="https://twitter.com/?lang=es" title="logo_x" target="_blank" rel="noreferrer">
                            <img className="Footer-img" src={x_logo} alt="logo_x" loading="lazy" />
                        </a>
                        </li>
                    </ul>
                </nav>
            </section>


        </>
    )
}

export default Footer