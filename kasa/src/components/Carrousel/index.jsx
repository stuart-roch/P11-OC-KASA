import { useState } from "react"



function Carrousel({ imgUrl, imgs}){
    
    const [currentImg,setCurrentImg] = useState({url:imgUrl, index:0})

    function prevSlide(){
        currentImg.index > 0 ? 
            setCurrentImg({url:imgs[currentImg.index-1],index:currentImg.index-1}):
            setCurrentImg({url:imgs[imgs.length-1],index:imgs.length-1})
    }

    function nextSlide(){
        currentImg.index < imgs.length-1 ? 
            setCurrentImg({url:imgs[currentImg.index+1],index:currentImg.index+1}):
            setCurrentImg({url:imgs[0],index:0})
    }
    return imgs.length > 1 ? (
        <div className="carrousel_container">
            <i className="fa-solid fa-chevron-left prev-slide" onClick={prevSlide}></i>
            <img src={currentImg.url} alt="du logement" />
            <p className="counter">{(currentImg.index + 1) + "/" + imgs.length}</p>
            <i className="fa-solid fa-chevron-right next-slide" onClick={nextSlide}></i>
        </div>
    )
    :
    (
    <div className="carrousel_container">
        <img src={currentImg.url} alt="du logement" />
    </div>
    )
}

export default Carrousel