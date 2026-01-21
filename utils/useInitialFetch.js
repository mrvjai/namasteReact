import { useState,useEffect } from "react";  
  
export const useInitialFetch=()=>{
  const [resObj, setResObj] = useState([]);
  const [fil,setFil] = useState([]);

  useEffect(() => {
    const realData =  async  () => {
     const ressp = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/trending-this-week&location=&isMobile=0");
     const fresp = await ressp.json()
     setResObj(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)
     setFil(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)

    };
    realData();
  }, []); // PASS a function to useEffect, not realData()

 
  return {resObj,fil}
}