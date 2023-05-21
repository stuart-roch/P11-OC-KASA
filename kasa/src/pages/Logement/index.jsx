import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tag";
import Ratings from "../../components/Ratings";


function Logement() {

  const { logementId } = useParams()
  const navigate = useNavigate()
  const [logement,setLogement] = useState({})
  const [isDataLoaded,setIsDataLoaded] = useState(false)

  useEffect( () => {
        
    async function fetchLogement(){
      try{
        const response = await fetch("../data/logements.json")
        const datas  = await response.json()
        const data = datas.filter( data => data.id === logementId )
        if(data.length === 1){
          setLogement(data[0])
          setIsDataLoaded(true)
        }else{
          navigate("/404")
        }
      }catch(err){
        console.log(err)
      }
    }

    fetchLogement()
  //eslint-disable-next-line  
  },[])

  useEffect(() => {
    if(isDataLoaded){
      document.title = logement.title + " - Kasa"
    }
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
            <Ratings ratings={logement.rating}/>
        </div>
      </div>
      <div className="logement_description-equip-container">
        <div className="logement_description">
          <Collapse title="Description" content={[logement.description]} />
        </div>
        <div className="logement_equipements">
          <Collapse title="Equipements" content={logement.equipments}/>
        </div>
      </div>
    </div>
  )
}

export default Logement;
