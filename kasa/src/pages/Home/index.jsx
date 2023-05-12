import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bannerImg from "../../assets/images/banner_home.png"
import Card from "../../components/Card"

function Home() {

  const [logements, setLogements] = useState([])

  useEffect( () => {
    
    document.title = "Accueil - Kasa"

    async function fetchLogements(){
      try{
        const response = await fetch("../data/logements.json")
        const data  = await response.json()
        setLogements(data)
      }catch(err){
        console.log(err)
      }
    }

    fetchLogements()

  },[])
  
  return (
    <div className="home_container">
      <div className="banner_container">
        <div className="banner-img_container">
          <img src={bannerImg} alt="Bannière de la page A propos" />
        </div>
        <div className="title_container">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="logements_section">
      {logements.map( logement => 
        <Link key={logement.id} to={"/logement/"+logement.id}><Card title={logement.title}/></Link> )}
      </div>
    </div>
    )
}

export default Home;
