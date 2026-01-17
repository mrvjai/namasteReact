const Cards=({res})=>{
    const {name,resId,image,rating,cuisine}=res.info;
    console.log(name)
    return(
        <div className='res-cards'>
            <img className ="card-img" src={image.url} />
            <h5 className='card-title'> {name} </h5>
            <h5 style ={{margin:10,marginRight:-10}}>{cuisine.map(x =>x.name).join(', ')}</h5>
            <h4 style ={{margin:20,paddingLeft:42}}>{rating.aggregate_rating} star</h4>
        </div>
    )
}

export default Cards;