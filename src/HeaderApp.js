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
        <div className='app-header'>
            <div className='app-logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1Gs_VIL7n-v95M1Paz1cAUf0O_YDLjqt762Dd7xZ1adjvabC84vPtk&s" />
            </div>
            <h1 style={{color:"red", marginTop:50}}>NALLAGATLA'S</h1>
            <div className='nav-items'>
                <ul>
                    <li>is Online:{status?"YES":"NO"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button className="sessionDetails" onClick={toggle}>{ (sessButton) ? "LOGIN" : "LOGOUT"}</button>
            </div>
        </div>
    )
}