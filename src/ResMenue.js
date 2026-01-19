import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ShaminDisplay from "./ShaminDisplay";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export const ResMenue=()=>{
    const pata = useParams();
    const name =pata.name;
    const menu=useRestaurantMenu(name)
// PASS a function to useEffect, not realData()
      if(menu?.length ===0){
        <ShaminDisplay />
      }
    return(
        <div>
            <h1 className="titleMenu">{name.toUpperCase()}</h1>
            <h1>menu</h1>
            <ul>
                {menu?.map(x=><li key ={x?.item?.id}>{x?.item?.name}</li>)}
            </ul>
        </div>
    )
}