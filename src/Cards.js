const Cards=({res})=>{
    const {name,imageUrl,proOfferText,subtitleData,rating_new}=res;
    return(
        <div className='res-cards w-50 h-75 bg-gray-400 cursor-pointer'>
            <img className ="h-40 w-50" alt="loading..." src={imageUrl}  />
            <h5 className='card-title'> <b>{name}</b> </h5>
            <h5 >{subtitleData.locality.text}</h5>
            <h4 >{proOfferText} </h4>
            <h4>{rating_new?.ratings?.DINING?.rating} stars</h4>
        </div>
    )
}

export default Cards;