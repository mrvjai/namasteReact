const Cards=({res})=>{
    const {name,imageUrl,proOfferText,subtitleData,rating_new}=res;
    return(
        <div className='res-cards'>
            <img className ="card-img" alt="loading..." src={imageUrl}  />
            <h5 className='card-title'> {name} </h5>
            <h5 style ={{margin:10,marginRight:-10}}>{subtitleData.locality.text}</h5>
            <h4 style ={{margin:20,paddingLeft:42}}>{proOfferText} </h4>
            <h4 style ={{margin:20,paddingLeft:42}}>{rating_new?.ratings?.DINING?.rating} </h4>
        </div>
    )
}

export default Cards;