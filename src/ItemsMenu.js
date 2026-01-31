import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const ItemsMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (x)=>{
    dispatch(addItem(x))
  }
  return (
    <div>
      {data.map((main, y) =>
        main.category.items.map((x, y) => (
          <div key={y} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="py-4 flex justify-between">
              <span>{x.item.name}</span>
              <button className="order border-black bg-sky-600 p-1" onClick={()=>handleAddItem(x)}>- ADD +</button>
            </div>
            <p className="text-xs">{x.item.desc||"preparing with love"}</p>
          </div>
        )),
      )}
    </div>
  );
};
