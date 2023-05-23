function Card({ title, imgUrl }){
    return( 
    <div className="card-logement">
        <img src={imgUrl} alt="du logement" />
        <h2>{title}</h2>
    </div>
    )
}

export default Card