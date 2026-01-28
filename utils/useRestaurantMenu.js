import { useEffect,useState } from "react";

const useRestaurantMenu=(name)=>{
    const [menu,setMenu] = useState([]);
    const [fullMenu,setFullMenu] = useState([]);
    useEffect(() => {
        const realData =  async  () => {
         const ressp = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/"+name+"/order");
         const fresp = await ressp.json()
         setMenu(fresp?.page_data?.order?.menuList?.menus[0]?.menu?.categories[0]?.category?.items);
         setFullMenu(fresp?.page_data?.order?.menuList?.menus)

        };
        realData();
      }, []); 
      return {fullMenu,menu};
}

export default useRestaurantMenu;