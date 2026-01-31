import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import { useStatusCheck } from "../utils/useStatusCheck";
import context from "../utils/useContext";
import { useSelector } from "react-redux";

export const HederApp=()=>{
    const [sessButton,setsessButton] =useState(false);
    const def = useContext(context)
    const status = useStatusCheck();
    const cart = useSelector((store)=>store.cart.items)
    console.log(cart)
    const toggle=()=>{
        setsessButton(!sessButton)
    }
    return(
        <div className='app-header flex justify-between border border-black bg-gray-100 ml-4 mr-12 p-2 m-2 items-center shadow-amber-800'>
            <div className='app-logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1Gs_VIL7n-v95M1Paz1cAUf0O_YDLjqt762Dd7xZ1adjvabC84vPtk&s" />
            </div>
            <div className='nav-items flex items-center'>
                <ul className="flex items-center p-3">
                    <li className="p-3">is Online:{status?"YES":"NO"}</li>
                    <li className="p-3"><Link to="/grocery" >Grocery</Link></li>
                    <li className="p-3"><Link to="/">Home</Link></li>
                    <li className="p-3"><Link to="/about">About</Link></li>
                    <li className="p-3"><Link to="/contact">Contact</Link></li>
                    <li className="p-3 font-bold"><Link to="/cart">🛒({cart.length})</Link></li>
                </ul>
                <button className=" bg-blue-500 px-2 ml-2 border border-blue-300 mt-2 mb-2 cursor-pointer" onClick={toggle}>{ (sessButton) ? "LOGIN" : "LOGOUT"}</button>
                <li className="p-3 list-none font-bold"><Link to="/contact">{def.userName}</Link></li>
            </div>
        </div>
    )
}