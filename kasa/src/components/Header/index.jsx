import logo from "../../assets/images/LOGO.png"
import { Link, useLocation } from "react-router-dom"

const routes = [{pageName : "Accueil", link : "/home" },{pageName : "A Propos", link : "/apropos" }]

function Header(){

    const location = useLocation();

    return (
        <header>
            <img src={logo} alt="logo de l'entreprise" />
            <nav>
                <ul>
                    {routes.map(route => 
                    (<li key={route.pageName}>
                        <Link to={route.link} className={(location.pathname === route.link) ? "active" : null}>{route.pageName}</Link>
                    </li>)
                    )}
                </ul>
            </nav>
        </header>   
    )
}

export default Header;