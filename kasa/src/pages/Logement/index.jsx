import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tag";


function Logement() {

  const { logementId } = useParams()
  const [logement,setLogement] = useState({})
  const [isDataLoaded,setIsDataLoaded] = useState(false)

  useEffect( () => {
    
    async function fetchLogement(){
      try{
        const response = await fetch("../data/logements.json")
        const datas  = await response.json()
        setLogement(datas.filter( data => data.id === logementId )[0])
        setIsDataLoaded(true)
      }catch(err){
        console.log(err)
      }
    }

    fetchLogement()
    document.title = logement.title + " - Kasa"
  })

  return isDataLoaded && (
    <div className="logement_container">
      <div className="logement_photos">
        <Carrousel imgUrl={logement.cover} imgs={logement.pictures} />
      </div>
      <div className="logement_header">
        <div className="logement_header-text">
          <h1> {logement.title} </h1>
          <strong> {logement.location} </strong>
        </div>
        <div className="logement_host-description">
          <strong> {logement.host.name} </strong>
          <img src={logement.host.picture} alt="du propriétaire" />
        </div>
        <div className="logement_tags">
          {logement.tags.map(tag => 
            <Tag key={tag} txt={tag}/>
          )}
        </div>
        <div className="logement_rating">
          
        </div>
      </div>
      <div className="logement_description-equip-container">
        <div className="logement_description">
          <Collapse title="Description" txt={logement.description} />
        </div>
        <div className="logement_equipements">
          <Collapse title="Equipements" txt={logement.equipments.reduce((acc,res)=> acc + " " + res)} />
        </div>
      </div>
    </div>
  )
}

export default Logement;
