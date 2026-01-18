import { useState } from "react";

export const HederApp=()=>{
    const [sessButton,setsessButton] =useState(false);
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
                <button className="sessionDetails" onClick={toggle}>{ (sessButton) ? "LOGIN" : "LOGOUT"}</button>
            </div>
        </div>
    )
}