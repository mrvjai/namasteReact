import Cards from "./Cards";
import { data } from "../utils/mockData";
import { useState, useEffect } from "react";
import { ShaminDisplay } from "./ShaminDisplay";

const BodyApp = () => {
  const [resObj, setResObj] = useState([]);
  const [fil,setFil] = useState([]);
  const [val,setVal] = useState("");

  useEffect(() => {
    const realData =  async  () => {
     const ressp = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/trending-this-week&location=&isMobile=0");
     const fresp = await ressp.json()
     setResObj(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)
     setFil(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)

    };
    realData();
  }, []); // PASS a function to useEffect, not realData()

  const filteredData = () => {
    const filter = resObj.filter(
      x => x?.rating_new?.ratings?.DINING?.rating > 4.3
    );
    setFil(filter);
  };
  const desiredSearch = ()=>{
    console.log(val)
    const finalResponse = resObj.filter(x=>x.name.toLowerCase().includes(val.toLocaleLowerCase()))
     setFil(finalResponse) 

  }
  if(resObj.length === 0){
        return <ShaminDisplay />
  }
  console.log("helloo")

  return (
    <div className="app-body">
      <div className="res-search">
        <div className="search-res"> 
            <input type="search" value={val} onChange={(e)=>setVal(e.target.value)} />
            <button onClick={desiredSearch}>search</button>

        </div>
        <button className="res-btn" onClick={filteredData}>
          Top Rated Hotels
        </button>
      </div>
      <div className="app-cards">
        {fil.map(x => <Cards key={x.id} res={x} />)}
      </div>
    </div>
  );
};

export default BodyApp;