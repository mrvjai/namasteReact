const Cards=({res})=>{
    const {name,imageUrl,subtitleData,rating_new}=res;
    return(
        <div className='res-cards w-50 h-75 bg-gray-400 cursor-pointer'>
            <img className ="h-40 w-50" alt="loading..." src={imageUrl}  />
            <h5 className='card-title'> <b>{name}</b> </h5>
            <h5 >{subtitleData.locality.text}</h5>
            <h4>{rating_new?.ratings?.DINING?.rating} stars</h4>
        </div>
    )
}
export const offerCards = ()=>{
    return (props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white">{props.res.proOfferText}</label>
            <Cards {...props} />
        </div>
    )}
}
export default Cards;