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
                        <li><NavLink to="/blog" className="Footer-li">Blog</NavLink></li>
                        <li><NavLink to="/registro" className="Footer-li">Registro</NavLink></li>
                        <li><NavLink to="/acceso" className="Footer-li">Acceso</NavLink></li>
                    </ul>
                </nav>
                <div>
                    {/* <nav>
                        <ul className="Footer-ul">
                            <li>Aviso Legal</li>
                            <li>Política de privacidad</li>
                            <li>Poítica de cookies</li>
                        </ul>
                    </nav> */}
                    <p className="Footer-p">&copy; 2021-2024 BuscaMascotas</p>
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