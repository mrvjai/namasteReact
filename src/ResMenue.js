import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ShaminDisplay from "./ShaminDisplay";

export const ResMenue=()=>{
    const pata = useParams();
    const name =pata.name;
    const [menu,setMenu] = useState([]);
    useEffect(() => {
        const realData =  async  () => {
         const ressp = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/"+name+"/order");
         const fresp = await ressp.json()
         setMenu(fresp?.page_data?.order?.menuList?.menus[0]?.menu?.categories[0]?.category?.items);

        };
        realData();
      }, []); // PASS a function to useEffect, not realData()
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