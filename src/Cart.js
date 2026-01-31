import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, clearItems } from "../utils/cartSlice";
const cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart,"dataitems")
   const dispatch = useDispatch();
    const handleAddItem = (x)=>{
      dispatch(addItem(x))
    }
    const handleClearItem = ()=>{
      dispatch(clearItems())
    }
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Cart 🛒</h1>
      <div>
      <button className="order border-black bg-sky-600 px-1 font-bold m-2" onClick={handleClearItem}>CLEAR</button>
      </div>
      
      {
        cart.map((x, y) => (
          <div className="w-6/12 m-auto" key={y}>
          <div key={y} className="p-2 m-2 border-gray-200 border-b-2 ">
            <div className="py-4 flex justify-between">
              <span>{x.item.name}</span>
              <button className="order border-black bg-sky-600 p-1" onClick={()=>handleAddItem(x)}>- ADD +</button>
            </div>
            <p className="text-xs">{x.item.desc||"preparing with love"}</p>
          </div>
          </div>
        ))
      }
    </div>
  );
};

export default cart;
