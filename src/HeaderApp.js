import { useState } from "react";
import { Link } from "react-router-dom";
import { useStatusCheck } from "../utils/useStatusCheck";

export const HederApp=()=>{
    const [sessButton,setsessButton] =useState(false);
    const status = useStatusCheck();
    const toggle=()=>{
        setsessButton(!sessButton)
    }
    return(
        <div className='app-header flex justify-between border border-black bg-gray-100 ml-4 items-center shadow-amber-800'>
            <div className='app-logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1Gs_VIL7n-v95M1Paz1cAUf0O_YDLjqt762Dd7xZ1adjvabC84vPtk&s" />
            </div>
            <div className='nav-items flex'>
                <ul className="flex items-center p-3">
                    <li className="p-3">is Online:{status?"YES":"NO"}</li>
                    <li className="p-3"><Link to="/grocery" >Grocery</Link></li>
                    <li className="p-3"><Link to="/">Home</Link></li>
                    <li className="p-3"><Link to="/about">About</Link></li>
                    <li className="p-3"><Link to="/contact">Contact</Link></li>
                </ul>
                <button className="bg-amber-200 mr-2" onClick={toggle}>{ (sessButton) ? "LOGIN" : "LOGOUT"}</button>
            </div>
        </div>
    )
}