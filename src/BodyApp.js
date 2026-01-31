import Cards,{offerCards} from "./Cards";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import {useEffect,useState} from 'react';
import { ShaminDisplay } from "./ShaminDisplay";
import { useStatusCheck } from "../utils/useStatusCheck";
import { useInitialFetch } from "../utils/useInitialFetch";
import context from "../utils/useContext";

const BodyApp = () => {
  const status = useStatusCheck();
  const [val, setVal] = useState("");
  // const { resObj, fil } = useInitialFetch();
  const [resObj, setResObj] = useState([]);
  const [fil,setFil] = useState([]);
  const {userName,setName} = useContext(context)
  const MainOffers = offerCards(Cards)
  
    useEffect(() => {
      const realData =  async  () => {
       const ressp = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/hyderabad/trending-this-week&location=&isMobile=0");
       const fresp = await ressp.json()
       setResObj(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)
       setFil(fresp?.page_data?.sections?.SECTION_ENTITIES_DATA)
  
      };
      realData();
    }, []);

  const filteredData = () => {
    const filter = resObj.filter(
      (x) => x?.rating_new?.ratings?.DINING?.rating > 4.3,
    );
    setFil(filter);
  };
  const desiredSearch = () => {
    const finalResponse = resObj.filter((x) =>
      x.name.toLowerCase().includes(val.toLocaleLowerCase()),
    );
    setFil(finalResponse);
  };
  if (resObj.length === 0) {
    return <ShaminDisplay />;
  }
  if (status === false) return <h1>Looks like you are Offline!!</h1>;

  return (
    <div className="app-body">
      <div className="flex">
        <div className="search-res mt-2 mb-2">
          <input
          className="border border-b-slate-800 ml-4"
            type="search"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="px-2 ml-2 border border-blue-300 bg-green-400 cursor-pointer" onClick={desiredSearch}>search</button>
        </div>
        <button className=" bg-blue-500 px-2 ml-2 border border-blue-300 mt-2 mb-2 cursor-pointer" onClick={filteredData}>
          Top Rated Hotels
        </button>

        <input className=" bg-blue-500 px-2 ml-2 border border-blue-300 mt-2 mb-2 cursor-pointer" type="text" value={userName} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap ml-4 gap-12">
        {fil.map((x) => (
          <Link
            key={x.id}
            to={
              "/" +
              new URL(x.url).pathname.split("/").filter(Boolean).pop() +
              "/order"
            }
          >
            {
              x.proOfferText ? (<MainOffers res={x} />) :( <Cards res={x} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyApp;
