import { useState } from "react"

function Collapse({ title, content }){

    const [isOpen, setIsOpen] = useState(true);
    
    return(
        <div className="collapse_container">
            <div className="collapse_top">
                <h2 className="collapse_title"> {title} </h2> 
                <i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} onClick={() => setIsOpen(!isOpen)}></i>
            </div>
            <div className={isOpen ? "collapse_bottom" : "collapse_bottom hidden"}>
                {content.length > 1 ? content.map(text => <p key={text} className="collapse_txt">{text}</p> )
                : (<p className="collapse_txt"> {content[0]} </p>)}
            </div>
        </div>
    )
}

export default Collapse