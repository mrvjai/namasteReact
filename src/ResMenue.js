import { useParams } from "react-router-dom";
import ShaminDisplay from "./ShaminDisplay";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { AllMenuDetails } from "./AllMenuDetails";
import { useState } from "react";

export const ResMenue=()=>{
    const pata = useParams();
    const [show,setShow] = useState(null)
    const [status,setStatus] = useState(true)
    const name =pata.name;
    const {fullMenu,menu}=useRestaurantMenu(name)
// PASS a function to useEffect, not realData()
      if(menu?.length ===0){
        <ShaminDisplay />
      }
    return(
        <div className="text-center">
            <h1 className="my-6 text-2xl"><b>{name.toUpperCase()}</b></h1>
            <h1><b>menu</b></h1>
           
            {
                 //controlled component
                fullMenu?.map((x,y)=> (<AllMenuDetails key ={y} res={x?.menu} detail={y===show&&status} fixShow={()=>setShow(y)} setStatus={()=>setStatus(!status)}/>))
            }
        </div>
    )
}