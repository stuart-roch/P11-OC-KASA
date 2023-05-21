import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Error404(){

    useEffect(() => {
        document.title = "404 - Kasa"
    },[])

    return (
        <div className='error404_container'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404