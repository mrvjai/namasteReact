import Cards from "./Cards";
import { data } from "../utils/mockData";
import {useState} from 'react';
const BodyApp=()=>{
    const [resObj,setresObj] = useState(data);
    const filteredData = ()=>{
         const filter = resObj.filter(x=>x.info.rating.aggregate_rating>4);
            setresObj(filter)
    }

    return(
        <div className='app-body'>
        <div className = 'res-search'>
        <button className="res-btn" onClick={filteredData}>TOP RATED RESTAURANTS</button>
        </div>
        <div className='app-cards'>
            {resObj.map(x=><Cards key = {x.info.resId} res={x} />)}
           
            </div>
        </div>
    )
}

export default BodyApp;