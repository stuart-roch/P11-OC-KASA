import { useEffect } from "react"
import bannerImg from "../../assets/images/banner_apropos.png"
import Collapse from "../../components/Collapse"

const pageContents=[{ title : "Fiabilité", txt : ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."] }, 
{ title : "Respect", txt : ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."] },
{ title : "Service", txt : ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."] },
{ title : "Sécurité", txt : ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."] }]

function APropos() {

    useEffect(() => {document.title = "A propos - Kasa"},[])

	return (
		<div className="apropos_container">
			<img src={bannerImg} alt="Bannière de la page A propos" />
			<div>
				{pageContents.map( pageContent => 
				<Collapse key={pageContent.title} title={pageContent.title} content={pageContent.txt} />)}
			</div>
		</div>
	)
}

export default APropos;
