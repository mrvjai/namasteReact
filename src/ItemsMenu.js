import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import {useState} from 'react'

export const ItemsMenu = ({ data }) => {
  const dispatch = useDispatch();
  const [rem,setRem] = useState(0)
  const handleAddItem = (x) => {
    dispatch(addItem(x));
    setRem(1);
  };
  const handleRemoveItem = (x) => {
    dispatch(removeItem(x));
  };
  return (
    <div>
      {data.map((main, y) =>
        main.category.items.map((x, y) => (
          <div key={y} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="py-4 flex justify-between">
              <span>{x.item.name}</span>
              <div>
                <button
                  className="order border-black bg-lime-200 p-1"
                  onClick={() => handleAddItem(x)}
                >
                  +
                </button>
                <button className="order border-black bg-sky-600 p-1">
                  ADD
                </button>
                {rem > 0 ? (
                  <button
                    className="order border-black bg-lime-200 p-1"
                    onClick={() => handleRemoveItem(x)}
                  >
                    -
                  </button>
                ) : null}
              </div>
            </div>
            <p className="text-xs">{x.item.desc || "preparing with love"}</p>
          </div>
        )),
      )}
    </div>
  );
};
