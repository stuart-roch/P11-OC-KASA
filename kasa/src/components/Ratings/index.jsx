function Ratings({ratings}){

    let res=[];

    for (let i=1;i<6;i++){
        i > ratings ? res.push(<i key={i+"-star_unrated"} className="fa-solid fa-star unrated"></i>) : res.push(<i key={i+"-star_rated"} className="fa-solid fa-star"></i>)
    }

    return res
}

export default Ratings