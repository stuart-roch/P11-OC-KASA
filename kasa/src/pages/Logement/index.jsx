import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";

function Logement() {

  const { logementId } = useParams()
  const [logement,setLogement] = useState([])

  useEffect( () => {
    
    async function fetchLogement(){
      try{
        const response = await fetch("../../../../data/logements.json")
        const datas  = await response.json()
        setLogement(datas.filter( data => data.id === logementId )[0])
      }catch(err){
        console.log(err)
      }
    }

    fetchLogement()

    document.title = logement.title+" - Kasa"

  },[])
  console.log(logement)
  return (
    <h1>Page Logement</h1>
  )
}

export default Logement;
